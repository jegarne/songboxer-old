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

var SongTable = function (_React$Component2) {
  _inherits(SongTable, _React$Component2);

  function SongTable() {
    _classCallCheck(this, SongTable);

    return _possibleConstructorReturn(this, (SongTable.__proto__ || Object.getPrototypeOf(SongTable)).apply(this, arguments));
  }

  _createClass(SongTable, [{
    key: "render",
    value: function render() {
      var songRows = this.props.songs.map(function (s) {
        return React.createElement(SongRow, { key: s.id, song: s });
      });
      return React.createElement(
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
      );
    }
  }]);

  return SongTable;
}(React.Component);

var SongRow = function (_React$Component3) {
  _inherits(SongRow, _React$Component3);

  function SongRow() {
    _classCallCheck(this, SongRow);

    return _possibleConstructorReturn(this, (SongRow.__proto__ || Object.getPrototypeOf(SongRow)).apply(this, arguments));
  }

  _createClass(SongRow, [{
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

  return SongRow;
}(React.Component);

var SongAdd = function (_React$Component4) {
  _inherits(SongAdd, _React$Component4);

  function SongAdd() {
    _classCallCheck(this, SongAdd);

    var _this4 = _possibleConstructorReturn(this, (SongAdd.__proto__ || Object.getPrototypeOf(SongAdd)).call(this));

    _this4.handleSubmit = _this4.handleSubmit.bind(_this4);
    return _this4;
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
            "Add"
          )
        )
      );
    }
  }]);

  return SongAdd;
}(React.Component);

var songs = [{ id: 0, title: "Purple Rain" }, { id: 1, title: "Rain Song" }];

var SetList = function (_React$Component5) {
  _inherits(SetList, _React$Component5);

  function SetList() {
    _classCallCheck(this, SetList);

    var _this5 = _possibleConstructorReturn(this, (SetList.__proto__ || Object.getPrototypeOf(SetList)).call(this));

    _this5.state = { songs: [] };
    _this5.createSong = _this5.createSong.bind(_this5);
    return _this5;
  }

  _createClass(SetList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this6 = this;

      setTimeout(function () {
        _this6.setState({ songs: songs });
      }, 500);
    }
  }, {
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
        React.createElement(SongTable, { songs: this.state.songs }),
        React.createElement("hr", null),
        React.createElement(SongAdd, { createSong: this.createSong })
      );
    }
  }]);

  return SetList;
}(React.Component);

ReactDOM.render(React.createElement(SetList, null), contentNode);