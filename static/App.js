"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contentNode = document.getElementById('contents');

var SongFilter = function (_React$Component) {
  _inherits(SongFilter, _React$Component);

  function SongFilter() {
    _classCallCheck(this, SongFilter);

    return _possibleConstructorReturn(this, (SongFilter.__proto__ || Object.getPrototypeOf(SongFilter)).apply(this, arguments));
  }

  _createClass(SongFilter, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        "This is a song filter placeholder."
      );
    }
  }]);

  return SongFilter;
}(React.Component);

var SetList = function (_React$Component2) {
  _inherits(SetList, _React$Component2);

  function SetList(props) {
    _classCallCheck(this, SetList);

    var _this2 = _possibleConstructorReturn(this, (SetList.__proto__ || Object.getPrototypeOf(SetList)).call(this, props));

    _this2.state = { sets: props.setList.sets };
    _this2.createSet = _this2.createSet.bind(_this2);
    return _this2;
  }

  _createClass(SetList, [{
    key: "createSet",
    value: function createSet(newSet) {
      var newSets = this.state.sets.slice();
      newSet.id = this.state.sets.length + 1;
      newSets.push(newSet);
      this.setState({ sets: newSets });
    }
  }, {
    key: "render",
    value: function render() {
      var sets = this.props.setList.sets.map(function (s) {
        return React.createElement(Set, { key: s.id, set: s });
      });
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h2",
          null,
          this.props.setList.title
        ),
        React.createElement(SetAdd, { createSet: this.createSet }),
        sets
      );
    }
  }]);

  return SetList;
}(React.Component);

var Set = function (_React$Component3) {
  _inherits(Set, _React$Component3);

  function Set(props) {
    _classCallCheck(this, Set);

    var _this3 = _possibleConstructorReturn(this, (Set.__proto__ || Object.getPrototypeOf(Set)).call(this, props));

    _this3.state = { songs: props.set.songs };
    _this3.createSong = _this3.createSong.bind(_this3);
    return _this3;
  }

  _createClass(Set, [{
    key: "createSong",
    value: function createSong(newSong) {
      var newSongs = this.state.songs.slice();
      newSong.id = this.state.songs.length + 1;
      newSongs.push(newSong);
      this.setState({ songs: newSongs });
    }
  }, {
    key: "render",
    value: function render() {
      var songRows = this.props.set.songs.map(function (s) {
        return React.createElement(Song, { key: s.id, song: s });
      });
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h2",
          null,
          this.props.set.title
        ),
        React.createElement(SongAdd, { createSong: this.createSong }),
        React.createElement(
          "table",
          { className: "bordered-table" },
          React.createElement(
            "thead",
            null,
            React.createElement(
              "tr",
              null,
              React.createElement(
                "th",
                null,
                "Id"
              ),
              React.createElement(
                "th",
                null,
                "Title"
              )
            )
          ),
          React.createElement(
            "tbody",
            null,
            songRows
          )
        )
      );
    }
  }]);

  return Set;
}(React.Component);

var Song = function (_React$Component4) {
  _inherits(Song, _React$Component4);

  function Song() {
    _classCallCheck(this, Song);

    return _possibleConstructorReturn(this, (Song.__proto__ || Object.getPrototypeOf(Song)).apply(this, arguments));
  }

  _createClass(Song, [{
    key: "render",
    value: function render() {
      var song = this.props.song;
      return React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          song.id
        ),
        React.createElement(
          "td",
          null,
          song.title
        )
      );
    }
  }]);

  return Song;
}(React.Component);

var SetAdd = function (_React$Component5) {
  _inherits(SetAdd, _React$Component5);

  function SetAdd() {
    _classCallCheck(this, SetAdd);

    var _this5 = _possibleConstructorReturn(this, (SetAdd.__proto__ || Object.getPrototypeOf(SetAdd)).call(this));

    _this5.handleSubmit = _this5.handleSubmit.bind(_this5);
    return _this5;
  }

  _createClass(SetAdd, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.setAdd;
      this.props.createSet({
        title: form.title.value
      });
      form.title.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "form",
          { name: "setAdd", onSubmit: this.handleSubmit },
          React.createElement("input", { type: "text", name: "title", placeholder: "Title" }),
          React.createElement(
            "button",
            null,
            "Add Set"
          )
        )
      );
    }
  }]);

  return SetAdd;
}(React.Component);

var SongAdd = function (_React$Component6) {
  _inherits(SongAdd, _React$Component6);

  function SongAdd() {
    _classCallCheck(this, SongAdd);

    var _this6 = _possibleConstructorReturn(this, (SongAdd.__proto__ || Object.getPrototypeOf(SongAdd)).call(this));

    _this6.handleSubmit = _this6.handleSubmit.bind(_this6);
    return _this6;
  }

  _createClass(SongAdd, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.songAdd;
      this.props.createSong({
        title: form.title.value
      });
      form.title.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "form",
          { name: "songAdd", onSubmit: this.handleSubmit },
          React.createElement("input", { type: "text", name: "title", placeholder: "Title" }),
          React.createElement(
            "button",
            null,
            "Add Song"
          )
        )
      );
    }
  }]);

  return SongAdd;
}(React.Component);

var setLists = [{ id: 0, title: "Big Gig",
  sets: [{ id: 0, title: "Set 1", songs: [{ id: 0, title: "Purple Rain" }, { id: 1, title: "Rain Song" }] }, { id: 1, title: "Set 2", songs: [{ id: 0, title: "Purple Rain" }, { id: 1, title: "Rain Song" }] }]
}];

var SetLists = function (_React$Component7) {
  _inherits(SetLists, _React$Component7);

  function SetLists() {
    _classCallCheck(this, SetLists);

    var _this7 = _possibleConstructorReturn(this, (SetLists.__proto__ || Object.getPrototypeOf(SetLists)).call(this));

    _this7.state = { setLists: [] };
    _this7.createSetlist = _this7.createSetlist.bind(_this7);
    return _this7;
  }

  _createClass(SetLists, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this8 = this;

      setTimeout(function () {
        _this8.setState({ setLists: setLists });
      }, 500);
    }
  }, {
    key: "createSetlist",
    value: function createSetlist(newSetlist) {
      var newSetlists = this.state.setLists.slice();
      newSetlist.id = this.state.setLists.length + 1;
      newSetlists.push(newSetlist);
      this.setState({ setLists: newSetlists });
    }
  }, {
    key: "render",
    value: function render() {
      var setLists = this.state.setLists.map(function (s) {
        return React.createElement(SetList, { key: s.id, setList: s });
      });
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "SongBoxer"
        ),
        React.createElement(SongFilter, null),
        React.createElement("hr", null),
        setLists
      );
    }
  }]);

  return SetLists;
}(React.Component);

ReactDOM.render(React.createElement(SetLists, null), contentNode);