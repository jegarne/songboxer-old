var contentNode = document.getElementById('contents');

class SongFilter extends React.Component {
  render() {
      return (
        <div>This is a song filter placeholder.</div>
      )};
}

class SongTable extends React.Component {
  render() {
      const songRows =  this.props.songs.map(s => <SongRow key={s.id} song={s}></SongRow>)
      return (
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
      )};
}

class SongRow extends React.Component {
  render() {
      const song = this.props.song;
      return (
        <tr>
          <td>{song.id}</td>
          <td>{song.title}</td>
        </tr>
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
            <button>Add</button>
          </form>
        </div>
      )};
}

const songs = [{id:0, title:"Purple Rain"}, {id:1, title:"Rain Song"}]

class SetList extends React.Component {
  constructor() {
    super();
    this.state = { songs: [] };
    this.createSong = this.createSong.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      this.setState({songs:songs});
    }, 500);
  }

  createSong(newSong) {
    const newSongs = this.state.songs.slice();
    newSong.id = this.state.songs.length + 1;
    newSongs.push(newSong);
    this.setState({songs:newSongs});
  }

  render() {
      return (
        <div>
          <h1>SongBoxer</h1>
          <SongFilter />
          <hr />
          <SongTable songs={this.state.songs} />
          <hr />
          <SongAdd createSong={this.createSong}/>
        </div>
      )};
}

ReactDOM.render(<SetList />, contentNode);
