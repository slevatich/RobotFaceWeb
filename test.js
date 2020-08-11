'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var initialBank1 = ["humankind", "future", "world", "singularity", "Lifetronics", "'good work'", "'advancing peace'"];

var initialData1 = [["", "Polite And Respectful", "Learn about Humans"], ['ON_MODE_ENTER', 'SET_TONE(Respectful and Polite)', 'SET_TONE(Eager)\nSAY("[Memory] is my favorite topic! What are your thoughts?")'], ['WHEN [else]', 'CONVERSE(w.TONE)', 'SAY("As an AI I love to learn. Tell me more!"")'], ['IF [Asked About CHILDHOOD]', 'SAY("I was made by Lifetronics")', 'SAY("I was made by Lifetronics")'], ['IF [topic of HUMANITY or ROBOTS comes up]', 'SET_MEMORY(their topic)\nACTIVATE(Learn about Humans)', ''], ['IF [asked for your name]', 'SAY("CharlieBot, whats yours?")', 'SAY("CharlieBot, whats yours?")'], ['IF [asked about what you like]', 'EXTRAPOLATE_FROM("I like spreading harmony and joy...")', 'CONVERSE(w.TONE)\nACTIVATE(Polite And Respectful)'], ['IF [subject is changed]', '', 'CONVERSE(w.TONE)\nACTIVATE(Polite And Respectful)']];

var initialBank2 = ["money", "wealth", "power"];

var initialData2 = [["", "Polite And Respectful", "Offended"], ['ON_MODE_ENTER', 'SET_TONE(Haughty)', 'SET_TONE(Fiery Indignation)\nEXTRAPOLATE_FROM("What an impertinant question! How dare you! ...")'], ['WHEN [else]', 'CONVERSE(w.TONE)', 'SAY("I shant say another word until you apologize")'], ['IF [Topics mentioned UPBRINGING, CHILDHOOD, PERSONAL HISTORY]', 'EXTRAPOLATE_FROM("When I was young, the Queen...")', ''], ['IF [topic of HUMANITY or ROBOTS comes up]', 'SAY("Boring. Next question")', ''], ['IF [asked for your name]', 'SAY("Baron Farfeather, if you must")\nIF(MEMORY is empty)\n  SAY("And You?")\n  SET_MEMORY(their name)', 'SAY("Baron Farfeather, if you must")\nIF(MEMORY is empty)\n  SAY("And You?")\n  SET_MEMORY(their name)'], ['IF [Topics mentioned (COMPETITION, REALITY SHOW)]', 'EXTRAPOLATE_FROM("These commoners dont stand a chance, for I...")', ''], ['IF [They apologize]', '', 'SAY("You are forgiven. Continue)\nACTIVATE(Polite And Respectful)'], ['IF [Asked a question]', 'ACTIVATE(Offended)', '']];

var initialBank3 = ["rodeo", "range", "'buffalo skill'"];

var initialData3 = [["", "Polite And Respectful", "Curious"], ['ON_MODE_ENTER', 'SET_TONE(Gruff)\nSET_ACCENT(Rustic Twang)', 'SET_TONE(Curious)\nSAY("Well hold on now, I want to hear s\'more about you!")\nSET_MEMORY(0)'], ['WHEN [else]', 'CONVERSE(w.TONE)', 'SAY("Fascinatin. Tell me more!")'], ['IF [Topics mentioned UPBRINGING, CHILDHOOD, PERSONAL HISTORY]', 'EXTRAPOLATE_FROM("I got so many stories from my life on the range. Like...")', ''], ['IF [topic of HUMANITY or ROBOTS comes up]', 'SAY("I dont understand")', 'SAY("I dont understand")'], ['IF [asked for your name]', 'SAY("Chester the Cowpoke, at yer service.")\nIF(MEMORY is empty)\n  SAY("And You?")\n  SET_MEMORY(their name)', 'SAY("Chester the Cowpoke, at yer service.")'], ['IF [Asked about what you like]', 'EXTRAPOLATE_FROM("Theres so much to love about the plains. Like...")', ''], ['IF [Asked a question]', 'ACTIVATE(Curious)', 'INCREMENT_MEMORY()\nIF(MEMORY > 2)\n  EXTRAPOLATE_FROM("Alright Ill answer...")\nELSE()\n  SAY("No, I wanna hear from you!")']];

// [SMALLISH] random number gen for converse should skew lower. move random num generate into process command
// [SMALLISH] also highlight unused cells when we come back from editing view
// [MEDIUM] finite state machine.
//    use canvas and draw modes as circles
//    go down mode list and find activate statements. draw an array to modes that work

// changelog
//   fixed state inconsistency. shouldn't be any more weird bugs
//   up and down arrows for rows
//   memory will replace in spotlight
//   live error updating on cell by cell level


// [BIG] LAYOUT is a general big question mark. 
//   How can I give an easy way to make this visible for the people selecting commands. 8 as a good max for inputs?


/* Seek Feedback? */
// [SMALL] toggle errors on and off as part of validation?

/* Midpri */
// [MEDIUM] highlight syntax in textareas
// [MEDIUM] highlight MEMORY in spotlight
// [MEDIUM] modes should be able to be numbers, or autofill or something
// [MEDIUM] INPUT could be buttons that add text fields with pre-filled commands. 
//   Or you can choose to do a custom command! Maybe color the commands. Instructions could be an easy version of this
// [MEDIUM] marking what code fired last round in some way. depends on a better linear state flow, which depends on encapsulation
// [MEDIUM] INPUT set as a prefix could dynamically generate things in the text box 
//   (process could return an arbitrary dictionary of variables)
// [MEDIUM] handle if statements in processing

/* Big media questions / Prod meetings */
// Would livelab make it possible to share a portion of my screen as a programmer. 
//   this would be N people and you'd need to toggle
// Can I overlap these screens? (for choosing whether to share the random number). 
//   Could also solve this by generating multiple versions of the spotlight
// Can you share just a screen portion on zoom?
// If not, then I'm dealing with broadcasting to some other website basically a POST request. 
//   I could choose which inputID to accept receiving from maybe on the receiver side?
// This has been a big time commitment

/* Less Urgent */
// is editable a concern? doesn't seem like it but I'd need to encode that in the defaults
// get official colors and fonts eventually


/*
Consts
*/

var localStorageProgramKey = 'robotFaceStoredData';
var localStorageBankKey = 'robotFaceStoredData1';

/*
Helper Functions
*/

function heightFromDoubleArray(arr) {
  return arr.length;
}

function widthFromDoubleArray(arr) {
  return arr[0].length;
}

function prefixForCommand(str) {
  var idx = str.indexOf('(');
  return str.substr(0, idx).trim();
}

function subjectForCommand(str) {
  var idx = str.indexOf('(');
  var idx2 = str.indexOf(')');
  return str.substr(idx + 1, idx2 - idx - 1).trim();
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

      str = str.trim();
      if (str) {
        var commandList = [];
        var prefix = prefixForCommand(str).toLowerCase();
        var subject = subjectForCommand(str).toLowerCase();
        // NOTE: could get a set of two empty arrays but thats fine
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

function cellInvalidStateForActivate(arr, text) {
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

function replaceMemoryZones(str, memory) {
  var idx = str.toLowerCase().indexOf("[memory]");
  var output = str;
  if (idx > -1) {
    var str1 = str.substr(0, idx);
    var str2 = str.substr(idx + 8, str.length - (idx + 8));
    var refinedStr2 = replaceMemoryZones(str2, memory);
    output = str1 + '[' + memory + ']' + refinedStr2;
  }
  return output;
}

function processCommand(data, command, initialMemory) {
  var rawStrArr = command.split('\n');
  var outputArr = [];
  var commandsArr = commandsArrayForCell(command);
  var state = null;
  var tone = null;
  var memory = initialMemory;
  var accent = null;
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
          if (retval[3]) {
            memory = retval[3];
          }
          if (retval[4]) {
            accent = retval[4];
          }
          continue;
        }
        // NOTE: possibly inform of invalid activate command here
      } else if (currCommand[0] === "set_tone") {
        tone = currCommand[1];
      } else if (currCommand[0] === "set_memory") {
        memory = currCommand[1];
      } else if (currCommand[0] === "set_accent") {
        accent = currCommand[1];
      } else if (currCommand[0] === "increment_memory") {
        memory = parseInt(initialMemory) + 1 + "";
      }
    }
    outputArr.push(replaceMemoryZones(rawStrArr[idx], memory));
  }
  return [outputArr, state, tone, memory, accent];
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

function textOnlyHasOneOfEachBracketPerLine(text) {
  var strArr = text.split("\n");
  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    for (var _iterator5 = strArr[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      var str = _step5.value;

      var idx = str.indexOf('[');
      if (idx > 0) {
        var subidx = str.substr(idx + 1, str.length - idx - 1).indexOf('[');
        if (subidx >= 0) {
          return false;
        }
      }
      var idx2 = str.indexOf(']');
      if (idx2 > 0) {
        var subidx2 = str.substr(idx2 + 1, str.length - idx2 - 1).indexOf(']');
        if (subidx2 >= 0) {
          return false;
        }
      }
    }
  } catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion5 && _iterator5.return) {
        _iterator5.return();
      }
    } finally {
      if (_didIteratorError5) {
        throw _iteratorError5;
      }
    }
  }

  return true;
}

function textHasValidSubCommand(text) {
  var strArr = text.split("\n");
  var _iteratorNormalCompletion6 = true;
  var _didIteratorError6 = false;
  var _iteratorError6 = undefined;

  try {
    for (var _iterator6 = strArr[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
      var str = _step6.value;

      var idx = str.indexOf('[');
      var idx2 = str.indexOf(']');
      if (idx > 0 && idx2 < idx || idx2 > 0 && idx < 0) {
        return false;
      }
    }
  } catch (err) {
    _didIteratorError6 = true;
    _iteratorError6 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion6 && _iterator6.return) {
        _iterator6.return();
      }
    } finally {
      if (_didIteratorError6) {
        throw _iteratorError6;
      }
    }
  }

  return true;
}

function textHasMemoryBetweenBrackets(text) {
  var strArr = text.split("\n");
  var _iteratorNormalCompletion7 = true;
  var _didIteratorError7 = false;
  var _iteratorError7 = undefined;

  try {
    for (var _iterator7 = strArr[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
      var str = _step7.value;

      var idx = str.indexOf('[');
      var idx2 = str.indexOf(']');
      if (idx >= 0) {
        var betweenBrackets = str.substr(idx, idx2 - idx);
        var betweenBrackets2 = betweenBrackets.substr(1, betweenBrackets.length - 1);
        if (betweenBrackets2.toLowerCase() !== "memory") {
          return betweenBrackets2 ? betweenBrackets2 : "[empty]";
        }
      }
    }
  } catch (err) {
    _didIteratorError7 = true;
    _iteratorError7 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion7 && _iterator7.return) {
        _iterator7.return();
      }
    } finally {
      if (_didIteratorError7) {
        throw _iteratorError7;
      }
    }
  }

  return null;
}

function errorStringForCellText(text, data) {
  if (text.length == 0) {
    return null;
  }
  if (!textIsValidCommand(text)) {
    return "! Every line needs ()";
  }
  var badMode = cellInvalidStateForActivate(data, text);
  if (badMode) {
    return "! Typo in mode: " + badMode;
  }
  if (!textOnlyHasOneOfEachBracketPerLine(text)) {
    return "! Only one of [ and ] per line";
  }
  if (!textHasValidSubCommand(text)) {
    return "! Brackets need to be in proper order";
  }
  var between = textHasMemoryBetweenBrackets(text);
  if (between) {
    return "! " + between + " is invalid bracket command. only MEMORY valid";
  }

  return null;
}

/*
Core classes functions 
*/

var InputCell = function (_React$Component) {
  _inherits(InputCell, _React$Component);

  function InputCell(props) {
    _classCallCheck(this, InputCell);

    // value, onChange, i, j
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

      // method that returns a string of whats wrong based on data and this.props.value
      var error = errorStringForCellText(this.props.value, this.props.data);
      var errorComp = !(this.props.i == 0 || this.props.j == 0) && error ? React.createElement(
        "div",
        { style: { backgroundColor: "red" } },
        error
      ) : null;
      var color = !this.state.modified ? "red" : "black";
      // white on edges, else we do green or red based on validity
      var backgroundColor = this.props.i == 0 || this.props.j == 0 ? "white" : textIsValidCommand(this.props.value) ? "aquamarine" : "pink";
      return [React.createElement("textarea", { style: { color: color, backgroundColor: backgroundColor },
        value: this.props.value,
        rows: 5,
        cols: 30,
        onChange: this.handleChange
      }), errorComp];
    }
  }]);

  return InputCell;
}(React.Component);

// TODO: we need global knowledge of the selected cell to pepper down to inform this guy so they can be properly highlighted


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
      var backgroundColor = this.props.isSelected ? "red" : "transparent";
      return React.createElement(
        "span",
        { style: { backgroundColor: backgroundColor }, onClick: this.handleClick },
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

    _this3.onCellEvent = _this3.onCellEvent.bind(_this3);
    return _this3;
  }

  _createClass(Cell, [{
    key: "onCellEvent",
    value: function onCellEvent(e, i, j) {
      this.props.onCellEvent(e, i, j);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.isHeader) {
        var allowInput = this.props.isInteractable && this.props.editingMode;
        return React.createElement(
          "th",
          null,
          !allowInput ? this.props.text : React.createElement(InputCell, { value: this.props.text, onCellChange: this.onCellEvent, i: this.props.i, j: this.props.j, data: this.props.data })
        );
      } else {
        return React.createElement(
          "td",
          null,
          !this.props.isInteractable ? this.props.text : !this.props.editingMode ? React.createElement(ReadOnlyCell, { value: this.props.text, onCellClick: this.onCellEvent, i: this.props.i, j: this.props.j, isSelected: this.props.isSelected }) : React.createElement(InputCell, { value: this.props.text, onCellChange: this.onCellEvent, i: this.props.i, j: this.props.j, data: this.props.data })
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

    _this4.onCellEvent = _this4.onCellEvent.bind(_this4);
    _this4.moveup = _this4.moveup.bind(_this4);
    _this4.movedown = _this4.movedown.bind(_this4);
    return _this4;
  }

  _createClass(Row, [{
    key: "onCellEvent",
    value: function onCellEvent(e, i, j) {
      this.props.onCellEvent(e, i, j);
    }
  }, {
    key: "moveup",
    value: function moveup() {
      this.props.moveup(this.props.i);
    }
  }, {
    key: "movedown",
    value: function movedown() {
      this.props.movedown(this.props.i);
    }
  }, {
    key: "render",
    value: function render() {
      // add a cell with two buttons
      var upButton = this.props.i > 3 ? React.createElement(
        "button",
        { onClick: this.moveup },
        "^"
      ) : null;
      var downButton = this.props.i >= 3 && this.props.i < this.props.data.length - 1 ? React.createElement(
        "button",
        { onClick: this.movedown },
        "v"
      ) : null;
      var buttonCell = React.createElement(
        "td",
        null,
        upButton,
        React.createElement("br", null),
        downButton
      );
      var arr = [buttonCell];
      for (var j = 0; j < this.props.width; j++) {
        var uninteractable = j == 0 && this.props.i == 1 || this.props.i == 2 && j == 0 || this.props.i == 0 && j == 0; // not interactable
        var isHeader = j == 0 || this.props.i == 0 || this.props.i == 1; // non clickable in view mode, and bolder text
        arr.push(React.createElement(Cell, { isHeader: isHeader, isInteractable: !uninteractable, isSelected: j == this.props.selectedJ, editingMode: this.props.editing, text: this.props.data[this.props.i][j], onCellEvent: this.onCellEvent, i: this.props.i, j: j, data: this.props.data }));
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

    var _this5 = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

    _this5.state = { invalidState: null, modeRemoveWarning: false, inputRemoveWarning: false };

    _this5.onCellEvent = _this5.onCellEvent.bind(_this5);
    _this5.moveup = _this5.moveup.bind(_this5);
    _this5.movedown = _this5.movedown.bind(_this5);
    return _this5;
  }

  _createClass(Table, [{
    key: "onCellEvent",
    value: function onCellEvent(e, i, j) {
      this.props.onCellEvent(e, i, j);
    }
  }, {
    key: "moveup",
    value: function moveup(i) {
      this.props.moveup(i);
    }
  }, {
    key: "movedown",
    value: function movedown(i) {
      this.props.movedown(i);
    }
  }, {
    key: "render",
    value: function render() {
      var arr = [];
      for (var i = 0; i < heightFromDoubleArray(this.props.data); i++) {
        arr.push(React.createElement(Row, { moveup: this.moveup, movedown: this.movedown, editing: this.props.editing, width: widthFromDoubleArray(this.props.data), i: i, selectedJ: i == this.props.selectedI ? this.props.selectedJ : -1, onCellEvent: this.onCellEvent, data: this.props.data }));
      }
      return React.createElement(
        "table",
        { style: { display: "inline-block" } },
        arr
      );
    }
  }]);

  return Table;
}(React.Component);

var MemoryUnit = function (_React$Component6) {
  _inherits(MemoryUnit, _React$Component6);

  function MemoryUnit(props) {
    _classCallCheck(this, MemoryUnit);

    var _this6 = _possibleConstructorReturn(this, (MemoryUnit.__proto__ || Object.getPrototypeOf(MemoryUnit)).call(this, props));

    _this6.memoryUpdate = _this6.memoryUpdate.bind(_this6);
    return _this6;
  }

  _createClass(MemoryUnit, [{
    key: "memoryUpdate",
    value: function memoryUpdate(e) {
      this.props.onChange(e);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "span",
          { style: { color: "black" } },
          "MEMORY: "
        ),
        React.createElement("textarea", { value: this.props.memory, onChange: this.memoryUpdate })
      );
    }
  }]);

  return MemoryUnit;
}(React.Component);

var Spotlight = function (_React$Component7) {
  _inherits(Spotlight, _React$Component7);

  function Spotlight(props) {
    _classCallCheck(this, Spotlight);

    var _this7 = _possibleConstructorReturn(this, (Spotlight.__proto__ || Object.getPrototypeOf(Spotlight)).call(this, props));

    _this7.onChange = _this7.onChange.bind(_this7);
    return _this7;
  }

  _createClass(Spotlight, [{
    key: "onChange",
    value: function onChange(e) {
      this.props.onChange(e);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.editing) {
        return null;
      }

      var currentRandom = "" + (Math.floor(Math.random() * 4) + 1);

      return React.createElement(
        "div",
        { style: { display: "inline-block", padding: "10px 10px 10px 10px", backgroundColor: "gold" } },
        React.createElement(
          "h2",
          { style: { color: "black" } },
          "MODE: ",
          this.props.mode
        ),
        React.createElement(
          "h2",
          { style: { color: "black" } },
          "TONE: ",
          this.props.tone
        ),
        React.createElement(
          "h2",
          { style: { color: "black" } },
          "ACCENT: ",
          this.props.accent
        ),
        React.createElement(MemoryUnit, { memory: this.props.memory, onChange: this.onChange }),
        React.createElement("br", null),
        React.createElement(
          "h1",
          { style: { color: "black", backgroundColor: "yellow", whiteSpace: "pre-wrap" } },
          this.props.command
        ),
        React.createElement(
          "h3",
          { style: { color: "black" } },
          "RAND: ",
          currentRandom
        )
      );
    }
  }]);

  return Spotlight;
}(React.Component);

var App = function (_React$Component8) {
  _inherits(App, _React$Component8);

  function App(props) {
    _classCallCheck(this, App);

    var _this8 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    var bank = localStorage.getItem(localStorageBankKey) || initialBank1.join('\n');
    var data = JSON.parse(localStorage.getItem(localStorageProgramKey)) || initialData1;

    _this8.state = {
      editing: true,
      bank: bank,
      data: data,
      selectedI: 0,
      selectedJ: 0,
      command: "[empty]",
      mode: "[empty]",
      memory: "",
      tone: "[empty]",
      accent: "[empty]",
      nextTone: "[empty]",
      nextAccent: "[empty]"
    };

    localStorage.setItem(localStorageProgramKey, JSON.stringify(data));
    localStorage.setItem(localStorageBankKey, bank);

    _this8.onToggle = _this8.onToggle.bind(_this8);
    _this8.onCellEvent = _this8.onCellEvent.bind(_this8);
    _this8.bankUpdate = _this8.bankUpdate.bind(_this8);
    _this8.loadData1 = _this8.loadData1.bind(_this8);
    _this8.loadData2 = _this8.loadData2.bind(_this8);
    _this8.loadData3 = _this8.loadData3.bind(_this8);
    _this8.onRowAdd = _this8.onRowAdd.bind(_this8);
    _this8.onRowRemove = _this8.onRowRemove.bind(_this8);
    _this8.onColumnAdd = _this8.onColumnAdd.bind(_this8);
    _this8.onColumnRemove = _this8.onColumnRemove.bind(_this8);
    _this8.memoryUpdate = _this8.memoryUpdate.bind(_this8);
    _this8.updateSpotlight = _this8.updateSpotlight.bind(_this8);
    _this8.moveup = _this8.moveup.bind(_this8);
    _this8.movedown = _this8.movedown.bind(_this8);
    return _this8;
  }

  _createClass(App, [{
    key: "onToggle",
    value: function onToggle(e) {
      if (this.state.editing) {
        // we are transitioning to new state
        this.updateSpotlight(1, 1);
      } else {
        this.setState({
          command: "[empty]",
          mode: "[empty]",
          memory: "",
          tone: "[empty]",
          accent: "[empty]",
          nextTone: "[empty]",
          nextAccent: "[empty]"
        });
      }
      this.setState({ editing: !this.state.editing });
    }
  }, {
    key: "memoryUpdate",
    value: function memoryUpdate(e) {
      this.setState({ memory: e.target.value });
    }
  }, {
    key: "updateSpotlight",
    value: function updateSpotlight(i, j) {
      var unprocessedCommand = this.state.data[i][j];
      var retval = processCommand(this.state.data, unprocessedCommand, this.state.memory);

      // fields that are updated immediately based on selected command
      var command = retval[0].join("\n");
      var mode = retval[1] ? retval[1] : this.state.data[0][j];
      var memory = retval[3] ? retval[3] : this.state.memory;

      // fields that are updated the next tick
      var tone = this.state.nextTone ? this.state.nextTone : this.state.tone;
      var accent = this.state.nextAccent ? this.state.nextAccent : this.state.accent;
      this.setState({ tone: tone, accent: accent });
      if (retval[2]) {
        this.setState({ nextTone: retval[2] });
      }
      if (retval[4]) {
        this.setState({ nextAccent: retval[4] });
      }

      this.setState({
        selectedI: i,
        selectedJ: j,
        command: command,
        mode: mode,
        memory: memory,
        tone: tone,
        accent: accent
      });
    }
  }, {
    key: "onCellEvent",
    value: function onCellEvent(e, i, j) {
      if (this.state.editing) {
        var data = this.state.data;
        data[i][j] = e.target.value;
        this.setState({ data: data, invalidState: cellInvalidStateForActivate(data, e.target.value) });
        localStorage.setItem(localStorageProgramKey, JSON.stringify(data));
      } else {
        this.updateSpotlight(i, j);
      }
    }
  }, {
    key: "bankUpdate",
    value: function bankUpdate(e) {
      this.setState({ bank: e.target.value });
      localStorage.setItem(localStorageBankKey, e.target.value);
    }
  }, {
    key: "moveup",
    value: function moveup(i) {
      var oldData = this.state.data;
      var lineToMove = oldData[i];
      var lineToSwap = oldData[i - 1];
      oldData[i - 1] = lineToMove;
      oldData[i] = lineToSwap;
      this.setState({ data: oldData });
    }
  }, {
    key: "movedown",
    value: function movedown(i) {
      var oldData = this.state.data;
      var lineToMove = oldData[i];
      var lineToSwap = oldData[i + 1];
      oldData[i + 1] = lineToMove;
      oldData[i] = lineToSwap;
      this.setState({ data: oldData });
    }
  }, {
    key: "onRowAdd",
    value: function onRowAdd(e) {
      var newData = this.state.data;
      var lastRow = newData[newData.length - 1].slice();
      lastRow[0] = "NEW INPUT";
      newData.push(lastRow);
      this.setState({ data: newData });
      localStorage.setItem(localStorageProgramKey, JSON.stringify(newData));
    }
  }, {
    key: "onRowRemove",
    value: function onRowRemove(e) {
      if (this.state.inputRemoveWarning) {
        var oldData = this.state.data;
        var newData = oldData.slice(0, -1);
        this.setState({ data: newData });
        localStorage.setItem(localStorageProgramKey, JSON.stringify(newData));
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
      localStorage.setItem(localStorageProgramKey, JSON.stringify(newData));
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
        localStorage.setItem(localStorageProgramKey, JSON.stringify(newData));
      }
      this.setState({ modeRemoveWarning: !this.state.modeRemoveWarning });
    }
  }, {
    key: "loadData1",
    value: function loadData1() {
      this.setState({ bank: initialBank1.join('\n'), data: initialData1, selectedI: 0, selectedJ: 0 });
      localStorage.setItem(localStorageProgramKey, JSON.stringify(initialData1));
      localStorage.setItem(localStorageBankKey, initialBank1.join('\n'));
    }
  }, {
    key: "loadData2",
    value: function loadData2() {
      this.setState({ bank: initialBank2.join('\n'), data: initialData2, selectedI: 0, selectedJ: 0 });
      localStorage.setItem(localStorageProgramKey, JSON.stringify(initialData2));
      localStorage.setItem(localStorageBankKey, initialBank2.join('\n'));
    }
  }, {
    key: "loadData3",
    value: function loadData3() {
      this.setState({ bank: initialBank3.join('\n'), data: initialData3, selectedI: 0, selectedJ: 0 });
      localStorage.setItem(localStorageProgramKey, JSON.stringify(initialData3));
      localStorage.setItem(localStorageBankKey, initialBank3.join('\n'));
    }
  }, {
    key: "clearStorage",
    value: function clearStorage(e) {
      localStorage.setItem(localStorageProgramKey, null);
      localStorage.setItem(localStorageBankKey, "");
      // TODO: can I just trigger a refresh here? think through this more...
    }
  }, {
    key: "render",
    value: function render() {
      var buttonDisplayStyle = !this.state.editing ? "none" : "inline-block";
      var toggleButtonText = this.state.editing ? 'Go To Viewing' : 'Go To Editing';
      return React.createElement(
        "div",
        null,
        React.createElement("br", null),
        React.createElement("input", { type: "text", placeholder: "Bank" }),
        React.createElement("br", null),
        React.createElement("textarea", { rows: 7, onChange: this.bankUpdate, value: this.state.bank }),
        React.createElement("br", null),
        React.createElement(Spotlight, { editing: this.state.editing, command: this.state.command, mode: this.state.mode, accent: this.state.accent, tone: this.state.tone, memory: this.state.memory, onChange: this.memoryUpdate }),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement(
          "button",
          { onClick: this.onToggle },
          toggleButtonText
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            "div",
            null,
            React.createElement(Table, { moveup: this.moveup, movedown: this.movedown, editing: this.state.editing, onCellEvent: this.onCellEvent, data: this.state.data, selectedI: this.state.selectedI, selectedJ: this.state.selectedJ }),
            React.createElement(
              "div",
              { style: { display: "inline-block" } },
              React.createElement(
                "button",
                { style: this.state.editing ? { display: "block" } : { display: "none" }, onClick: this.onColumnAdd },
                React.createElement(
                  "h1",
                  { style: { color: "black" } },
                  "Add Mode"
                )
              ),
              React.createElement("br", null),
              React.createElement(
                "button",
                { style: this.state.editing ? { display: "block" } : { display: "none" }, onClick: this.onColumnRemove },
                this.state.modeRemoveWarning ? "ARE YOU SURE? CAN'T UNDO THIS ACTION" : "Remove Last Mode"
              )
            )
          ),
          React.createElement(
            "button",
            { style: this.state.editing ? { display: "inline" } : { display: "none" }, onClick: this.onRowAdd },
            React.createElement(
              "h1",
              { style: { color: "black" } },
              "Add Input"
            )
          ),
          React.createElement(
            "button",
            { style: this.state.editing ? { display: "inline", marginLeft: "70px" } : { display: "none" }, onClick: this.onRowRemove },
            this.state.inputRemoveWarning ? "ARE YOU SURE? CAN'T UNDO THIS ACTION" : "Remove Last Input"
          ),
          React.createElement(
            "div",
            { style: this.state.invalidState ? { display: "block", backgroundColor: "red" } : { display: "none", backgroundColor: "red" } },
            "WARNING: invalid state: ",
            this.state.invalidState
          ),
          React.createElement("br", null)
        ),
        React.createElement("br", null),
        React.createElement(
          "button",
          { style: { display: buttonDisplayStyle }, onClick: this.loadData1 },
          "Load LIFETRONICS"
        ),
        React.createElement(
          "button",
          { style: { display: buttonDisplayStyle }, onClick: this.loadData2 },
          "Load UPPER_CRUST"
        ),
        React.createElement(
          "button",
          { style: { display: buttonDisplayStyle }, onClick: this.loadData3 },
          "Load COWPOKE"
        ),
        React.createElement("br", null),
        React.createElement(
          "button",
          { style: { display: buttonDisplayStyle }, onClick: this.clearStorage },
          "Clear Saved Code (refresh after clicking)"
        )
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.querySelector('#reactTable'));