'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var initialData1 = [["", "HAPPY", "SAD"], ['ON_STATE_ENTER', 'SET_TONE("cheerful")\nSAY("Hello old chum!")', 'SET_TONE("morose")'], ['DEFAULT', 'CONVERSE_WITH_TONE()', 'CONVERSE_WITH_TONE()'], ['"hello"', 'EXT("Hi hi! ...")', 'SAY("Im sad")'], ['"goodbye"', 'SAY("Goodbye old chum!")', 'TODO'], ['"be sad"', 'ACTIVATE(SAD)', 'TODO']];

var initialData2 = [["", "SKIPPING", "SAD"], ['ON_STATE_ENTER', 'SET_TONE("cheerful")\nSAY("Hello old chum!")', 'SET_TONE("morose")'], ['DEFAULT', 'CONVERSE_WITH_TONE()', 'CONVERSE_WITH_TONE()'], ['"hello"', 'EXT("Hi hi! ...")', 'SAY("Im sad")'], ['"goodbye"', 'SAY("Goodbye old chum!")', 'TODO'], ['"be sad"', 'ACTIVATE(SAD)', 'TODO']];

var initialData3 = [["", "YIPPEE", "SAD"], ['ON_STATE_ENTER', 'SET_TONE("cheerful")\nSAY("Hello old chum!")', 'SET_TONE("morose")'], ['DEFAULT', 'CONVERSE_WITH_TONE()', 'CONVERSE_WITH_TONE()'], ['"hello"', 'EXT("Hi hi! ...")', 'SAY("Im sad")'], ['"goodbye"', 'SAY("Goodbye old chum!")', 'TODO'], ['"be sad"', 'ACTIVATE(SAD)', 'TODO']];

/* Current exciting Features */
// EDIT
// adding a new state/input will copy over state from previous inputs/states
// there are THREE sliders
// text is color coded based on whether it has been edited
// input background for intersection cells is color coded based on whether it has correct syntax (very basic)
// VIEW
// GOTO is handled (but it needs to be one line)
// there is a spotlight so the AI actor only needs to look one place
// the spotlight includes a random number to play around with


// Multi line split
// also check for tone setting


/* Fast Follows */
// Improve by using variable observation?
// can I set up some defaults, like a save load thing? and perhaps multiple sites with different defaults for saturday rehearsal?
// The initial data needs to have ability to contain the editable information so the difficulty can scale
// Improve the syntax correction. there are some easy ones
// Marking what code fired for next time is a good way of maybe preserving select once it opens into editing mode again?
// enable multi line goto
// Color code cells by keyword (this could also be error highlighting or a clue that we don't know what you're trying)
// Figure out how to write better react for stylizing...

/* Less Urgent */
// get official colors and fonts eventually
// Improve input verification... if the state gets updated there should be more invalid spots!
// Selecting from the different options of things (i.e. you pick ACTIVATE or SAY)
// Having some instructions in the website


// Save and load would be nice... could I get a csv upload working and a save to csv for simple save load to disk?

// Moving the labels for load library and the sliders into react would make them able to be non editable for the purposes of view mode

/* helper functions */

function heightFromDoubleArray(arr) {
  return arr.length;
}

function widthFromDoubleArray(arr) {
  return arr[0].length;
}

// there can be validation at the cell level
// with maybe hint text?

function prefixForCommand(str) {
  var idx = str.indexOf('(');
  return str.substr(0, idx);
}

function subjectForCommand(str) {
  var idx = str.indexOf('(');
  var idx2 = str.indexOf(')');
  return str.substr(idx + 1, idx2 - idx - 1);
}

function cellInvalidStateForActivate(arr, i, j) {
  var text = arr[i][j];
  // we only want to bother here if the text is a valid command
  // NOTE: could simplify all this
  var prefix = prefixForCommand(text).toLowerCase();
  if (prefix) {
    if (prefix === "activate") {
      var subj = subjectForCommand(text).toLowerCase();
      if (subj) {
        for (var j = 0; j < arr[0].length; j++) {
          if (arr[0][j].toLowerCase() === subj) {
            return null;
          }
        }
        return subj;
      } else {
        return "You haven't provided a state!";
      }
    }
  }
  // if its not valid or 'activate' the cell is not invalid
  return null;
}

function textIsValidCommand(text) {
  // TODO: split the strings and and them all
  // TODO: also check for a closing paren after the opening
  var commandType = prefixForCommand(text).toLowerCase();
  if (commandType) {
    // check from valid list
    // TODO: activate needs to be checked at a higher level
    // if (commandType === "activate") {
    //   return false;
    // }
    return true;
  }
  return false;
}

/* core classes functions */

// controller component for input

var InputCell = function (_React$Component) {
  _inherits(InputCell, _React$Component);

  function InputCell(props) {
    _classCallCheck(this, InputCell);

    var _this = _possibleConstructorReturn(this, (InputCell.__proto__ || Object.getPrototypeOf(InputCell)).call(this, props));

    _this.state = { modified: false };

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(InputCell, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({ modified: true });
      this.props.onCellChange(e, this.props.i, this.props.j);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("textarea", { style: !this.state.modified ? this.props.i == 0 || this.props.j == 0 ? { color: "red", backgroundColor: "white" } : textIsValidCommand(this.props.value) ? { color: "red", backgroundColor: "aquamarine" } : { color: "red", backgroundColor: "pink" } : this.props.i == 0 || this.props.j == 0 ? { color: "black", backgroundColor: "white" } : textIsValidCommand(this.props.value) ? { color: "black", backgroundColor: "aquamarine" } : { color: "black", backgroundColor: "pink" },
        value: this.props.value,
        rows: 5,
        cols: 30,
        onChange: this.handleChange
      });
    }
  }]);

  return InputCell;
}(React.Component);

// TODO: we need global knowledge of the selected cell to pepper down to inform this guy so they can be properly highlighted
// NOTE: the name of onCellChange is a little inaccurate. could be fully peppered up as OnCellEvent


var ReadOnlyCell = function (_React$Component2) {
  _inherits(ReadOnlyCell, _React$Component2);

  function ReadOnlyCell(props) {
    _classCallCheck(this, ReadOnlyCell);

    var _this2 = _possibleConstructorReturn(this, (ReadOnlyCell.__proto__ || Object.getPrototypeOf(ReadOnlyCell)).call(this, props));

    _this2.handleClick = _this2.handleClick.bind(_this2);
    return _this2;
  }

  _createClass(ReadOnlyCell, [{
    key: "handleClick",
    value: function handleClick(e) {
      this.props.onCellClick(e, this.props.i, this.props.j);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "span",
        { style: this.props.isSelected ? { backgroundColor: "red" } : { backgroundColor: "transparent" }, onClick: this.handleClick },
        this.props.value
      );
    }
  }]);

  return ReadOnlyCell;
}(React.Component);

var Cell = function (_React$Component3) {
  _inherits(Cell, _React$Component3);

  function Cell(props) {
    _classCallCheck(this, Cell);

    var _this3 = _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).call(this, props));

    _this3.onCellChange = _this3.onCellChange.bind(_this3);
    return _this3;
  }

  _createClass(Cell, [{
    key: "onCellChange",
    value: function onCellChange(e, i, j) {
      this.props.onCellChange(e, i, j);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.isHeader) {
        return React.createElement(
          "th",
          { style: { whiteSpace: "pre-line" } },
          !this.props.isInteractable ? this.props.text : !this.props.editingMode ? this.props.text //<ReadOnlyCell value={this.props.text} onCellClick={this.onCellChange} i={this.props.i} j={this.props.j} isSelected={this.props.isSelected} />
          : React.createElement(InputCell, { value: this.props.text, onCellChange: this.onCellChange, i: this.props.i, j: this.props.j })
        );
      } else {
        return React.createElement(
          "td",
          { style: { whiteSpace: "pre-line" } },
          !this.props.isInteractable ? this.props.text : !this.props.editingMode ? React.createElement(ReadOnlyCell, { value: this.props.text, onCellClick: this.onCellChange, i: this.props.i, j: this.props.j, isSelected: this.props.isSelected }) : React.createElement(InputCell, { value: this.props.text, onCellChange: this.onCellChange, i: this.props.i, j: this.props.j })
        );
      }
    }
  }]);

  return Cell;
}(React.Component);

var Row = function (_React$Component4) {
  _inherits(Row, _React$Component4);

  function Row(props) {
    _classCallCheck(this, Row);

    var _this4 = _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).call(this, props));

    _this4.onCellChange = _this4.onCellChange.bind(_this4);
    return _this4;
  }

  _createClass(Row, [{
    key: "onCellChange",
    value: function onCellChange(e, i, j) {
      this.props.onCellChange(e, i, j);
    }
  }, {
    key: "render",
    value: function render() {
      var arr = [];
      for (var j = 0; j < this.props.width; j++) {
        var isOnEdge = j == 0 && this.props.i == 1 || this.props.i == 2 && j == 0 || this.props.i == 0 && j == 0; // editable in edit mode
        var isHeader = j == 0 || this.props.i == 0 || this.props.i == 1; // non clickable in view mode, and bolder text
        arr.push(React.createElement(Cell, { isHeader: isHeader, isInteractable: !isOnEdge, isSelected: j == this.props.selectedJ, editingMode: this.props.editing, text: this.props.data[this.props.i][j], onCellChange: this.onCellChange, i: this.props.i, j: j }));
      }
      return React.createElement(
        "tr",
        null,
        arr
      );
    }
  }]);

  return Row;
}(React.Component);

var Table = function (_React$Component5) {
  _inherits(Table, _React$Component5);

  function Table(props) {
    _classCallCheck(this, Table);

    // TODO: I need a copy method that will properly make sure this array is not copied by ref if I want to preserve default valuing
    var _this5 = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

    var data = JSON.parse(localStorage.getItem('robotFaceStoredData')) || initialData1;
    _this5.state = { data: data, selectedI: 0, selectedJ: 0, invalidState: null, modeRemoveWarning: false, inputRemoveWarning: false };

    _this5.onCellChange = _this5.onCellChange.bind(_this5);
    _this5.onRowAdd = _this5.onRowAdd.bind(_this5);
    _this5.onColumnAdd = _this5.onColumnAdd.bind(_this5);
    _this5.onRowRemove = _this5.onRowRemove.bind(_this5);
    _this5.onColumnRemove = _this5.onColumnRemove.bind(_this5);
    _this5.loadData1 = _this5.loadData1.bind(_this5);
    _this5.loadData2 = _this5.loadData2.bind(_this5);
    _this5.loadData3 = _this5.loadData3.bind(_this5);
    return _this5;
  }

  _createClass(Table, [{
    key: "onCellChange",
    value: function onCellChange(e, i, j) {
      if (this.props.editing) {
        var newData = this.state.data;
        newData[i][j] = e.target.value;
        // NOTE: hacky to set table state here because it lives in table scope
        this.setState({ data: newData, selectedI: 0, selectedJ: 0, invalidState: cellInvalidStateForActivate(newData, i, j) });
        localStorage.setItem('robotFaceStoredData', JSON.stringify(newData));
        // NOTE: extremely inefficient
        this.props.onSpotlight(this.state.data[0][1], this.state.data[1][1]);
      } else {
        var state = this.state.data[0][j];
        var command = this.state.data[i][j];
        // we only want to bother here if the text is a valid command
        // NOTE: could simplify all this
        var prefix = prefixForCommand(command).toLowerCase();
        if (prefix) {
          if (prefix === "activate") {
            var subj = subjectForCommand(command).toLowerCase();
            if (subj) {
              for (var newJ = 0; newJ < this.state.data[0].length; newJ++) {
                if (this.state.data[0][newJ].toLowerCase() === subj) {
                  command = this.state.data[1][newJ];
                  state = this.state.data[0][newJ];
                }
              }
            }
            // TODO: possibly notate at this point that its a broken activate?
          }
        }
        this.setState({ selectedI: i, selectedJ: j });
        this.props.onSpotlight(state, command);
      }
    }
  }, {
    key: "onRowAdd",
    value: function onRowAdd(e) {
      var newData = this.state.data;
      var lastRow = newData[newData.length - 1].slice();
      lastRow[0] = "NEW INPUT";
      newData.push(lastRow);
      this.setState({ data: newData });
      localStorage.setItem('robotFaceStoredData', JSON.stringify(newData));
    }
  }, {
    key: "onRowRemove",
    value: function onRowRemove(e) {
      if (this.state.inputRemoveWarning) {
        var oldData = this.state.data;
        var newData = oldData.slice(0, -1);
        this.setState({ data: newData });
        localStorage.setItem('robotFaceStoredData', JSON.stringify(newData));
      }
      this.setState({ inputRemoveWarning: !this.state.inputRemoveWarning });
    }
  }, {
    key: "onColumnAdd",
    value: function onColumnAdd(e) {
      var newData = this.state.data;
      for (var i = 0; i < newData.length; i++) {
        if (i) {
          newData[i].push(newData[i][newData[i].length - 1]);
        } else {
          newData[i].push("NEW STATE");
        }
      }
      this.setState({ data: newData });
      localStorage.setItem('robotFaceStoredData', JSON.stringify(newData));
    }
  }, {
    key: "onColumnRemove",
    value: function onColumnRemove(e) {
      if (this.state.modeRemoveWarning) {
        var newData = this.state.data;
        for (var i = 0; i < newData.length; i++) {
          newData[i] = newData[i].slice(0, -1);
        }
        this.setState({ data: newData });
        localStorage.setItem('robotFaceStoredData', JSON.stringify(newData));
      }
      this.setState({ modeRemoveWarning: !this.state.modeRemoveWarning });
    }
  }, {
    key: "loadData1",
    value: function loadData1(e) {
      this.setState({ data: initialData1 });
      localStorage.setItem('robotFaceStoredData', JSON.stringify(initialData1));
    }
  }, {
    key: "loadData2",
    value: function loadData2(e) {
      this.setState({ data: initialData2 });
      localStorage.setItem('robotFaceStoredData', JSON.stringify(initialData2));
    }
  }, {
    key: "loadData3",
    value: function loadData3(e) {
      this.setState({ data: initialData3 });
      localStorage.setItem('robotFaceStoredData', JSON.stringify(initialData3));
    }
  }, {
    key: "render",
    value: function render() {
      var arr = [];
      for (var i = 0; i < heightFromDoubleArray(this.state.data); i++) {
        arr.push(React.createElement(Row, { editing: this.props.editing, width: widthFromDoubleArray(this.state.data), i: i, selectedJ: i == this.state.selectedI ? this.state.selectedJ : -1, onCellChange: this.onCellChange, data: this.state.data }));
      }
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          null,
          React.createElement(
            "table",
            { style: { display: "inline-block" } },
            arr
          ),
          React.createElement(
            "div",
            { style: { display: "inline-block" } },
            React.createElement(
              "button",
              { style: this.props.editing ? { display: "block" } : { display: "none" }, onClick: this.onColumnAdd },
              React.createElement(
                "h1",
                { style: { color: "black" } },
                "Add Mode"
              )
            ),
            React.createElement("br", null),
            React.createElement(
              "button",
              { style: this.props.editing ? { display: "block" } : { display: "none" }, onClick: this.onColumnRemove },
              this.state.modeRemoveWarning ? "ARE YOU SURE? CAN'T UNDO THIS ACTION" : "Remove Last Mode"
            )
          )
        ),
        React.createElement(
          "button",
          { style: this.props.editing ? { display: "inline" } : { display: "none" }, onClick: this.onRowAdd },
          React.createElement(
            "h1",
            { style: { color: "black" } },
            "Add Input"
          )
        ),
        React.createElement(
          "button",
          { style: this.props.editing ? { display: "inline", marginLeft: "70px" } : { display: "none" }, onClick: this.onRowRemove },
          this.state.inputRemoveWarning ? "ARE YOU SURE? CAN'T UNDO THIS ACTION" : "Remove Last Input"
        ),
        React.createElement(
          "div",
          { style: this.state.invalidState ? { display: "block", backgroundColor: "red" } : { display: "none", backgroundColor: "red" } },
          "WARNING: invalid state: ",
          this.state.invalidState
        ),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement(
          "button",
          { onClick: this.loadData1 },
          "Load Data 1"
        ),
        React.createElement(
          "button",
          { onClick: this.loadData2 },
          "Load Data 2"
        ),
        React.createElement(
          "button",
          { onClick: this.loadData3 },
          "Load Data 3"
        ),
        React.createElement("br", null)
      );
    }
  }]);

  return Table;
}(React.Component);

var App = function (_React$Component6) {
  _inherits(App, _React$Component6);

  function App(props) {
    _classCallCheck(this, App);

    var _this6 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this6.state = { editing: true, currentCommand: "", currentRandom: "", currentState: "" };

    _this6.onToggle = _this6.onToggle.bind(_this6);
    _this6.onSpotlight = _this6.onSpotlight.bind(_this6);
    return _this6;
  }

  _createClass(App, [{
    key: "onToggle",
    value: function onToggle(e) {
      // if (!this.state.editing) {
      //   this.setState({currentCommand: "", currentRandom: "", currentState: ""});
      // }
      this.setState({ editing: !this.state.editing });
    }
  }, {
    key: "onSpotlight",
    value: function onSpotlight(state, action) {
      var randNum = "" + (Math.floor(Math.random() * 4) + 1);
      this.setState({ currentRandom: randNum, currentState: "CurrentState: " + state, currentCommand: action });
    }
  }, {
    key: "clearStorage",
    value: function clearStorage(e) {
      localStorage.setItem('robotFaceStoredData', null);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { style: this.state.editing ? { display: "none" } : { display: "inline-block", padding: "10px 10px 10px 10px", backgroundColor: "gold" } },
          React.createElement(
            "h2",
            { style: { color: "black" } },
            this.state.currentState
          ),
          React.createElement(
            "h1",
            { style: { color: "black", whiteSpace: "pre-line" } },
            this.state.currentCommand
          ),
          React.createElement(
            "h3",
            { style: { color: "black" } },
            this.state.currentRandom
          )
        ),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement(
          "button",
          { onClick: this.onToggle },
          this.state.editing ? 'Go To Viewing' : 'Go To Editing'
        ),
        React.createElement(Table, { editing: this.state.editing, onSpotlight: this.onSpotlight }),
        React.createElement(
          "button",
          { onClick: this.clearStorage },
          "Clear Saved Code (refresh after clicking)"
        )
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.querySelector('#reactTable'));