'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var initialData1 = [["", "Polite And Respectful", "Learn about Humans"], ['ON_MODE_ENTER', 'SET_TONE(Respectful and Polite)', 'SET_TONE(Eager)\nSAY("[Memory] is my favorite topic! What are your thoughts?")'], ['WHEN [else]', 'CONVERSE(w.TONE)', 'SAY("As an AI I love to learn. Tell me more!"")'], ['IF [Asked About CHILDHOOD]', 'SAY("I was made by Lifetronics")', 'SAY("I was made by Lifetronics")'], ['IF [topic of HUMANITY or ROBOTS comes up]', 'SET_MEMORY(their topic)\nACTIVATE(Learn about Humans)', ''], ['IF [asked for your name]', 'SAY("CharlieBot, whats yours?")', 'SAY("CharlieBot, whats yours?")'], ['IF [asked about what you like]', 'EXTRAPOLATE_FROM("I like spreading harmony and joy")', 'CONVERSE(w.TONE)\nACTIVATE(Polite And Respectful)'], ['IF [subject is changed]', '', 'CONVERSE(w.TONE)\nACTIVATE(Polite And Respectful)']];

var initialData2 = [["", "Polite And Respectful", "Offended"], ['ON_MODE_ENTER', 'SET_TONE(Haughty)', 'SET_TONE(Fiery Indignation)\nEXTRAPOLATE_FROM("What an impertinant question! How dare you!")'], ['WHEN [else]', 'CONVERSE(w.TONE)', 'SAY("I shant say another word until you apologize")'], ['IF [Topics mentioned UPBRINGING, CHILDHOOD, PERSONAL HISTORY]', 'EXTRAPOLATE_FROM("When I was young, the Queen...")', ''], ['IF [topic of HUMANITY or ROBOTS comes up]', 'SAY("Boring. Next question")', ''], ['IF [asked for your name]', 'SAY("Baron Farfeather, if you must")\nIF(MEMORY is empty)\n  SAY("And You?")\n  SET_MEMORY(their name)', 'SAY("Baron Farfeather, if you must")\nIF(MEMORY is empty)\n  SAY("And You?")\n  SET_MEMORY(their name)'], ['IF [Topics mentioned (COMPETITION, REALITY SHOW)]', 'EXTRAPOLATE_FROM("These commoners dont stand a chance, for I...")', ''], ['IF [They apologize]', '', 'SAY("You are forgiven. Continue)\nACTIVATE(Polite And Respectful)'], ['IF [Asked a question]', 'ACTIVATE(Offended)', '']];

var initialData3 = [["", "Polite And Respectful", "Curious"], ['ON_MODE_ENTER', 'SET_TONE(Gruff)\nSET_ACCENT(Rustic Tawng)', 'SET_TONE(Curious)\nSAY("Well hold on now, I want to hear s\'more about you!")'], ['WHEN [else]', 'CONVERSE(w.TONE)', 'SAY("Fascinatin. Tell me more!")'], ['IF [Topics mentioned UPBRINGING, CHILDHOOD, PERSONAL HISTORY]', 'EXTRAPOLATE_FROM("I got so many stories from my life on the range. Like...")', ''], ['IF [topic of HUMANITY or ROBOTS comes up]', 'SAY("I dont understand")', 'SAY("I dont understand")'], ['IF [asked for your name]', 'SAY("Chester the Cowpoke, at yer service.")\nIF(MEMORY is empty)\n  SAY("And You?")\n  SET_MEMORY(their name)', 'SAY("Chester the Cowpoke, at yer service.")'], ['IF [Asked about what you like]', 'EXTRAPOLATE_FROM("Theres so much to love about the plains. Like...")', ''], ['IF [Asked a question]', 'ACTIVATE(Curious)', 'SET_MEMORY("Memory+1")\nIF(MEMORY > 2)\n  EXTRAPOLATE_FROM("Alright Ill answer...")\nELSE()\n  SAY("No, I wanna hear from you!")']];

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

function prefixForCommand(str) {
  var idx = str.indexOf('(');
  return str.substr(0, idx);
}

function subjectForCommand(str) {
  var idx = str.indexOf('(');
  var idx2 = str.indexOf(')');
  return str.substr(idx + 1, idx2 - idx - 1);
}

function commandsArrayForCell(text) {
  var strArr = text.split("\n");
  var commandArr = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = strArr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var str = _step.value;

      if (str) {
        var commandList = [];
        var prefix = prefixForCommand(str).toLowerCase();
        var subject = subjectForCommand(str).toLowerCase();
        // could get a set of two empty arrays but thats fine
        commandList.push(prefix);
        commandList.push(subject);
        commandArr.push(commandList);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return commandArr;
}

function activateCommandFromCommandArray(commandsArr) {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = commandsArr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var func = _step2.value;

      if (func[0] === "activate") {
        return func;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return null;
}

function indexOfValidMode(arr, activateMode) {
  for (var idx = 1; idx < arr[0].length; idx++) {
    if (arr[0][idx].toLowerCase() === activateMode) {
      return idx;
    }
  }
  return -1;
}

function cellInvalidStateForActivate(arr, i, j) {
  var text = arr[i][j];
  var commandsArr = commandsArrayForCell(text);
  var activateCommand = activateCommandFromCommandArray(commandsArr);
  if (activateCommand) {
    if (indexOfValidMode(arr, activateCommand[1]) > 0) {
      return null;
    }
    // return the invalid state for textual display, with special text for empty
    if (activateCommand[1] === "") {
      return "[empty]";
    }
    return activateCommand[1];
  }
  return null;
}

function processCommand(data, command) {
  var rawStrArr = command.split('\n');
  var outputArr = [];
  var commandsArr = commandsArrayForCell(command);
  var state = null;
  var tone = null;
  for (var idx in commandsArr) {
    var currCommand = commandsArr[idx];
    if (currCommand[0]) {
      // this is a valid command, see if it needs to be evaluated
      if (currCommand[0] === "activate") {
        var modeJ = indexOfValidMode(data, currCommand[1]);
        if (modeJ > 0) {
          state = data[0][modeJ];
          // recursively evaluate outputArr[1]
          var retval = processCommand(data, data[1][modeJ]);
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = retval[0][Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              command = _step3.value;

              outputArr.push(command);
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }

          if (retval[1]) {
            state = retval[1];
          }
          if (retval[2]) {
            tone = retval[2];
          }
          continue;
        }
        // NOTE: possibly inform of invalid activate command here
      } else if (currCommand[0] === "set_tone") {
        tone = currCommand[1];
      }
    }
    outputArr.push(rawStrArr[idx]);
  }
  return [outputArr, state, tone];
}

// Ensures every line has opening followed by closing paren
function textIsValidCommand(text) {
  var strArr = text.split("\n");
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = strArr[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var str = _step4.value;

      var idx = str.indexOf('(');
      var idx2 = str.indexOf(')');
      if (!(idx > 0 && idx2 > idx)) {
        return false;
      }
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4.return) {
        _iterator4.return();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  return true;
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
    _this5.state = { data: data, selectedI: 0, selectedJ: 0, invalidState: null, modeRemoveWarning: false, inputRemoveWarning: false, tone: "[empty]" };

    console.log("initializing");

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
        var retval = processCommand(this.state.data, this.state.data[1][1]);
        if (retval[2]) {
          this.setState({ tone: retval[2] });
        }
        this.props.onSpotlight(this.state.data[0][1], "empty", this.state.data[1][1]);
      } else {
        var state = this.state.data[0][j];
        var command = this.state.data[i][j];
        var retval = processCommand(this.state.data, command);

        var outputCommand = retval[0].join("\n");
        if (retval[1]) {
          state = retval[1];
        }
        if (retval[2]) {
          this.setState({ tone: retval[2] });
        }

        this.setState({ selectedI: i, selectedJ: j });
        this.props.onSpotlight(state, this.state.tone, outputCommand);
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
          "Load LIFETRONICS"
        ),
        React.createElement(
          "button",
          { onClick: this.loadData2 },
          "Load UPPER_CRUST"
        ),
        React.createElement(
          "button",
          { onClick: this.loadData3 },
          "Load COWPOKE"
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

    _this6.state = { editing: true, currentCommand: "", currentRandom: "", currentState: "", currentTone: "" };

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
    value: function onSpotlight(state, tone, action) {
      var randNum = "" + (Math.floor(Math.random() * 4) + 1);
      this.setState({ currentRandom: randNum, currentState: "CurrentState: " + state, currentTone: "CurrentTone: " + tone, currentCommand: action });
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
            "h2",
            { style: { color: "black" } },
            this.state.currentTone
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