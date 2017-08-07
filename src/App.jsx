var contentNode = document.getElementById('contents');

class SongFilter extends React.Component {
  render() {
      return (
        <div>This is a song filter placeholder.</div>
      )};
}

class SetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sets: props.setList.sets };
    this.createSet = this.createSet.bind(this);
  }

  createSet(newSet) {
    const newSets = this.state.sets.slice();
    newSet.id = this.state.sets.length + 1;
    newSets.push(newSet);
    this.setState({sets:newSets});
  }

  render() {
      const sets =  this.props.setList.sets.map(s => <Set key={s.id} set={s}></Set>)
      return (
        <div>
          <h2>{this.props.setList.title}</h2>
          <SetAdd createSet={this.createSet}/>
          {sets}
        </div>
      )};
}

class Set extends React.Component {
  constructor(props) {
    super(props);
    this.state = { songs: props.set.songs };
    this.createSong = this.createSong.bind(this);
  }

  createSong(newSong) {
    const newSongs = this.state.songs.slice();
    newSong.id = this.state.songs.length + 1;
    newSongs.push(newSong);
    this.setState({songs:newSongs});
  }

  render() {
      const songRows =  this.props.set.songs.map(s => <Song key={s.id} song={s}></Song>)
      return (
        <div>
          <h2>{this.props.set.title}</h2>
          <SongAdd createSong={this.createSong}/>
          <table  className="bordered-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
                {songRows}
            </tbody>
          </table>
        </div>
      )};
}

class Song extends React.Component {
  render() {
      const song = this.props.song;
      return (
        <tr>
          <td>{song.id}</td>
          <td>{song.title}</td>
        </tr>
      )};
}

class SetAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var form = document.forms.setAdd;
    this.props.createSet({
      title: form.title.value
    });
    form.title.value = "";
  }

  render() {
      return (
        <div>
          <form name="setAdd" onSubmit={this.handleSubmit}>
            <input type="text" name="title" placeholder="Title"></input>
            <button>Add Set</button>
          </form>
        </div>
      )};
}

class SongAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var form = document.forms.songAdd;
    this.props.createSong({
      title: form.title.value
    });
    form.title.value = "";
  }

  render() {
      return (
        <div>
          <form name="songAdd" onSubmit={this.handleSubmit}>
            <input type="text" name="title" placeholder="Title"></input>
            <button>Add Song</button>
          </form>
        </div>
      )};
}

const setLists = [{id:0, title:"Big Gig",
                  sets:[
                    {id:0, title:"Set 1", songs:[{id:0, title:"Purple Rain"}, {id:1, title:"Rain Song"}]}
                    ,{id:1, title:"Set 2", songs:[{id:0, title:"Purple Rain"}, {id:1, title:"Rain Song"}]}
                  ]
                 }]

class SetLists extends React.Component {
  constructor() {
    super();
    this.state = { setLists: [] };
    this.createSetlist = this.createSetlist.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      this.setState({setLists:setLists});
    }, 500);
  }

  createSetlist(newSetlist) {
    const newSetlists = this.state.setLists.slice();
    newSetlist.id = this.state.setLists.length + 1;
    newSetlists.push(newSetlist);
    this.setState({setLists:newSetlists});
  }

  render() {
      const setLists =  this.state.setLists.map(s => <SetList key={s.id} setList={s} />)
      return (
        <div>
          <h1>SongBoxer</h1>
          <SongFilter />
          <hr />
          {setLists}
        </div>
      )};
}

ReactDOM.render(<SetLists />, contentNode);
