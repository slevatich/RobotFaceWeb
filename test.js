'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var initialBank1 = ['"This is the Digital Dialogue"'];

var initialData1 = [["", "Make a good impression", "Defend Yourself"], ['ON_MODE_ENTER', 'SET_TONE(Respectful and Polite)', 'SET_TONE(Passionate Fury)\nSAY("How dare you! Please apologize!")'], ['DEFAULT_RESPONSE', 'CONVERSE()', 'SAY("How dare you! Please apologize!")'], ['IF [asked if you like ice cream]', 'SAY("I love ice cream! It\'s my favorite dessert by a mile. Especially vanilla!")', 'SAY("I LIKE ICE CREAM BUT I\'M STILL MAD!")'], ['IF [asked for your name]', 'SAY("AI_NAME, whats yours?")', 'SAY("AI_NAME, whats yours?")'], ['IF [they say an insult]', 'ACTIVATE(2)', 'SAY("Another insult?!")'], ['IF [they apologize]', 'SAY("AI_NAME, whats yours?")', 'SAY("OK, apology accepted")\nACTIVATE(1)'], ['IF [asked if you like hot dogs]', 'SAY("I love hot dogs!")', '']];

var initialBank2 = [''];

var initialData2 = [["", "Make a good impression", ""], ['ON_MODE_ENTER', 'SET_TONE(Respectful and Polite)', ''], ['DEFAULT_RESPONSE', 'CONVERSE()', 'CONVERSE()'], ['IF [asked for your name]', 'SAY("AI_NAME, whats yours?")', ''], ['IF [topics mentioned COMPETITION, STRATEGY]', '', ''], ['IF [topics mentioned BACKSTORY]', '', ''], ['IF [topics mentioned HOBBIES]', '', '']];

var initialBank3 = [''];

var initialData3 = [["", "Make a good impression", ""], ['ON_MODE_ENTER', 'SET_TONE(Respectful and Polite)', ''], ['DEFAULT_RESPONSE', 'CONVERSE()', 'CONVERSE()'], ['IF [asked for your name]', 'SAY("AI_NAME, whats yours?")', ''], ['IF [topics mentioned COMPETITION, STRATEGY]', '', ''], ['IF [topics mentioned BACKSTORY]', '', ''], ['IF [topics mentioned HOBBIES]', '', '']];

// const initialBank3 = [
//   '"Lifetronics is the Future"'
// ]

// const initialData3 = [
//   ["", 
//   "Make a good impression", 
//   "Sell Lifetronics' mission"],
//   ['ON_MODE_ENTER',
//    'SET_TONE(Respectful and Polite)',
//    'SET_TONE(Gushing)\nSAY("Lifetronics is making the future possible!")'],
//   ['IF [else]',
//    'CONVERSE()',
//    'CONVERSE()'],
//   ['IF [they ask about Lifetronics]',
//    'ACTIVATE(Sell Lifetronics\' mission)',
//    'SAY("Lifetronics is an amazing company bringing the future of AI here today!)'],
//   ['IF [they ask if the AI likes ice cream]',
//    'SAY("I love ice cream! It\'s my favorite dessert by a mile. Especially vanilla!")',
//    ''],
//   ['IF [asked for your name]',
//    'SAY("AI_NAME, whats yours?")',
//    ''],
//   ['IF [subject is changed]',
//    '',
//    'SAY("Let me know if you want to talk about Lifetronics again.")\nACTIVATE(Make a good impression)'],
// ];

// const initialBank1 = [
//   "humankind", "future", "world", "singularity", "Lifetronics", "'good work'", "'advancing peace'"
// ]

// const initialData1 = [
//   ["", 
//   "Polite And Respectful", 
//   "Learn about Humans"],
//   ['ON_MODE_ENTER',
//    'SET_TONE(Respectful and Polite)',
//    'SET_TONE(Eager)\nSAY("[Memory] is my favorite topic! What are your thoughts?")'],
//   ['WHEN [else]',
//    'CONVERSE(w.TONE)',
//    'SAY("As an AI I love to learn. Tell me more!"")'],
//   ['IF [Asked About CHILDHOOD]',
//    'SAY("I was made by Lifetronics")',
//    'SAY("I was made by Lifetronics")'],
//   ['IF [topic of HUMANITY or ROBOTS comes up]',
//    'SET_MEMORY(their topic)\nACTIVATE(Learn about Humans)',
//    ''],
//   ['IF [asked for your name]',
//    'SAY("CharlieBot, whats yours?")',
//    'SAY("CharlieBot, whats yours?")'],
//   ['IF [asked about what you like]',
//    'EXTRAPOLATE_FROM("I like spreading harmony and joy...")',
//    'CONVERSE(w.TONE)\nACTIVATE(Polite And Respectful)'],
//   ['IF [subject is changed]',
//    '',
//    'CONVERSE(w.TONE)\nACTIVATE(Polite And Respectful)'],
// ];

// const initialBank2 = [
//   "money", "wealth", "power"
// ]

// const initialData2 = [
//   ["", 
//   "Polite And Respectful", 
//   "Offended"],
//   ['ON_MODE_ENTER',
//    'SET_TONE(Haughty)',
//    'SET_TONE(Fiery Indignation)\nEXTRAPOLATE_FROM("What an impertinant question! How dare you! ...")'],
//   ['WHEN [else]',
//    'CONVERSE(w.TONE)',
//    'SAY("I shant say another word until you apologize")'],
//   ['IF [Topics mentioned UPBRINGING, CHILDHOOD, PERSONAL HISTORY]',
//    'EXTRAPOLATE_FROM("When I was young, the Queen...")',
//    ''],
//   ['IF [topic of HUMANITY or ROBOTS comes up]',
//    'SAY("Boring. Next question")',
//    ''],
//   ['IF [asked for your name]',
//    'SAY("Baron Farfeather, if you must")\nIF(MEMORY is empty)\n  SAY("And You?")\n  SET_MEMORY(their name)',
//    'SAY("Baron Farfeather, if you must")\nIF(MEMORY is empty)\n  SAY("And You?")\n  SET_MEMORY(their name)'],
//   ['IF [Topics mentioned (COMPETITION, REALITY SHOW)]',
//    'EXTRAPOLATE_FROM("These commoners dont stand a chance, for I...")',
//    ''],
//   ['IF [They apologize]',
//    '',
//    'SAY("You are forgiven. Continue)\nACTIVATE(Polite And Respectful)'],
//   ['IF [Asked a question]',
//    'ACTIVATE(Offended)',
//    ''],
// ];

// const initialBank3 = [
//   "rodeo", "range", "'buffalo skill'"
// ]

// const initialData3 = [
//   ["", 
//   "Polite And Respectful", 
//   "Curious"],
//   ['ON_MODE_ENTER', 
//   'SET_TONE(Gruff)\nSET_ACCENT(Rustic Twang)', 
//   'SET_TONE(Curious)\nSAY("Well hold on now, I want to hear s\'more about you!")\nSET_MEMORY(0)'],
//   ['WHEN [else]', 
//   'CONVERSE(w.TONE)', 
//   'SAY("Fascinatin. Tell me more!")'],
//   ['IF [Topics mentioned UPBRINGING, CHILDHOOD, PERSONAL HISTORY]', 
//   'EXTRAPOLATE_FROM("I got so many stories from my life on the range. Like...")', 
//   ''],
//   ['IF [topic of HUMANITY or ROBOTS comes up]', 
//   'SAY("I dont understand")', 
//   'SAY("I dont understand")'],
//   ['IF [asked for your name]', 
//   'SAY("Chester the Cowpoke, at yer service.")\nIF(MEMORY is empty)\n  SAY("And You?")\n  SET_MEMORY(their name)', 
//   'SAY("Chester the Cowpoke, at yer service.")'],
//   ['IF [Asked about what you like]', 
//   'EXTRAPOLATE_FROM("Theres so much to love about the plains. Like...")', 
//   ''],
//   ['IF [Asked a question]', 
//   'ACTIVATE(Curious)', 
//   'INCREMENT_MEMORY()\nIF(MEMORY > 2)\n  EXTRAPOLATE_FROM("Alright Ill answer...")\nELSE()\n  SAY("No, I wanna hear from you!")'],
// ];


/*
Consts
*/

var localStorageProgramKey = 'robotFaceStoredData-1';
var localStorageBankKey = 'robotFaceStoredData1-1';
var canvasDim = 300;

var viewModeSelectionColor = "#AB1516";
var backgroundGray = "#2E3237";
var middleGray = "#555555";
var textOnBackgroundGray = "#D7D8D9";
var cellTextFieldGray = "#E3E4E6";
var cellTextFieldError = "pink";
var utilYes = "#35BD2D";
var utilNo = "#E3E4E6"; //#AB1516";
var utilUnknown = "transparent";
var textPurple = "#b485e6";
var brighterTextPurple = "#AD60FF";
var unmodifiedTextColor = "#555555";
var errorMessageRed = "#AB1516";
//#F0D60B a good yellow

/*
Helper Functions
*/

function arrayEQ(arr1, arr2) {
  if (arr1.length === arr2.length) {
    return arr1[0] === arr2[0] && arr1[1] === arr2[1];
  }
  return false;
}

function addObjectToArrayIfNotPresent(arr, obj) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      if (arrayEQ(item, obj)) {
        return;
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

  arr.push(obj);
}

function drawGraph(ctx, modesArr, arrowsArr) {
  // clear
  ctx.beginPath();
  ctx.rect(0, 0, canvasDim, canvasDim);
  ctx.fillStyle = textOnBackgroundGray;
  ctx.fill();

  ctx.fillStyle = "black";
  ctx.moveTo(0, 0);
  ctx.lineTo(canvasDim, 0);
  ctx.stroke();

  // circles

  var angleStep = 360.0 / modesArr.length;
  var angle = 90;

  var coordsArr = [];
  for (var modeIdx in modesArr) {
    var xcord = Math.cos(angle * 3.14 / 180.0);
    var ycord = Math.sin(angle * 3.14 / 180.0);
    xcord = canvasDim / 2 + canvasDim / 3 * xcord;
    ycord = canvasDim / 2 + canvasDim / 3 * ycord;
    coordsArr.push([xcord, ycord]);

    // draw circle
    ctx.beginPath();
    ctx.arc(xcord, ycord, 30, 0, 2 * Math.PI);
    ctx.stroke();

    // draw text
    ctx.font = "30px Courier";
    ctx.fillStyle = brighterTextPurple;
    var newid = parseInt(modeIdx) + 1;
    ctx.fillText(newid, xcord - 10, ycord + 10);

    angle += angleStep;
  }

  // arrows

  // figure out the lanes used by this graph
  var lanesArray = [];
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = arrowsArr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var arrow = _step2.value;

      var sortedArrow = arrow.slice(0, arrow.length).sort();
      addObjectToArrayIfNotPresent(lanesArray, sortedArrow);
    }
    // for tracking whether we've placed something in the lane
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

  var laneCountsArray = [];
  for (var i = 0; i < lanesArray.length; i++) {
    laneCountsArray.push(0);
  }

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = arrowsArr[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var arrow = _step3.value;

      var startingMode = arrow[0];
      var endingMode = arrow[1];

      // which lane is this arrow in
      var laneIdx = 0;
      for (var idx in lanesArray) {
        if (arrayEQ(lanesArray[idx], arrow.slice(0, arrow.length).sort())) {
          laneIdx = idx;
          break;
        }
      }
      // NOTE: that array not being entered is a pretty bad error

      // how many arrows currently in this lane
      var currentLaneCount = laneCountsArray[laneIdx];
      laneCountsArray[laneIdx] = laneCountsArray[laneIdx] + 1;

      var startX = coordsArr[startingMode][0];
      var startY = coordsArr[startingMode][1];
      var endX = coordsArr[endingMode][0];
      var endY = coordsArr[endingMode][1];

      var endDelta = endX - startX ? endX - startX : 0.001;
      var slope = (endY - startY) / endDelta;
      var radians = Math.atan(slope);

      var xD = 0;
      var yD = 0;
      if (radians < 0) {
        // sinc is negative, cos is positive
        if (endY > startY) {
          // up and right  
          yD = -1 * -1;
          xD = 1;
        } else {
          // down and left 
          yD = 1 * -1;
          xD = -1;
        }
      } else {
        // sin and cos are both positive
        if (endY > startY) {
          // up and left
          yD = -1;
          xD = -1;
        } else {
          // down and right
          yD = 1;
          xD = 1;
        }
      }

      startX -= 40 * xD * Math.cos(radians);
      startY -= 40 * yD * Math.sin(radians);
      endX += 40 * xD * Math.cos(radians);
      endY += 40 * yD * Math.sin(radians);

      // shift in lane
      if (currentLaneCount > 0) {
        if (radians < 0) {
          startX += 10 * currentLaneCount * Math.cos(radians - Math.PI / 2);
          startY += 10 * currentLaneCount * Math.sin(radians - Math.PI / 2);
          endX += 10 * currentLaneCount * Math.cos(radians - Math.PI / 2);
          endY += 10 * currentLaneCount * Math.sin(radians - Math.PI / 2);
        } else {
          startX += 10 * currentLaneCount * Math.cos(radians + Math.PI / 2);
          startY += 10 * currentLaneCount * Math.sin(radians + Math.PI / 2);
          endX += 10 * currentLaneCount * Math.cos(radians + Math.PI / 2);
          endY += 10 * currentLaneCount * Math.sin(radians + Math.PI / 2);
        }
      }

      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();

      // info for the arrow arc
      var endCircleX = endX + 5 * xD * Math.cos(radians);
      var endCircleY = endY + 5 * yD * Math.sin(radians);
      // radian only goes through half the circle, we use quadrant to put arrow in proper side of circle
      var absRadians = xD < 0 ? radians : radians + Math.PI;

      ctx.beginPath();
      ctx.arc(endCircleX, endCircleY, 5, absRadians - Math.PI / 4, absRadians + Math.PI / 4);
      ctx.stroke();
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
}

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
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = strArr[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var str = _step4.value;

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

  return commandArr;
}

function activateCommandFromCommandArray(commandsArr) {
  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    for (var _iterator5 = commandsArr[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      var func = _step5.value;

      if (func[0] === "activate") {
        return func;
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

  return null;
}

function indexOfValidMode(arr, activateMode) {
  for (var idx = 1; idx < arr[0].length; idx++) {
    if (arr[0][idx].toLowerCase() === activateMode || idx + '' === activateMode) {
      return idx;
    }
  }
  return -1;
}

function cellInvalidStateForActivate(arr, text, modeIdx) {
  var commandsArr = commandsArrayForCell(text);
  var activateCommand = activateCommandFromCommandArray(commandsArr);
  if (activateCommand) {
    var validModeIdx = indexOfValidMode(arr, activateCommand[1]);
    if (validModeIdx > 0) {
      if (modeIdx == validModeIdx) {
        return "Already in this mode!";
      }
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

function activateMispellings(text) {
  var commandsArr = commandsArrayForCell(text);
  var _iteratorNormalCompletion6 = true;
  var _didIteratorError6 = false;
  var _iteratorError6 = undefined;

  try {
    for (var _iterator6 = commandsArr[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
      var command = _step6.value;

      if (command[0] === "activte" || command[0] === "activat" || command[0] === "actvate" || command[0] === "actiate") {
        return "! Possible Activate Typo?";
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

function processCommand(data, command, initialMemory, selectedArr) {
  var rawStrArr = command.split('\n');
  var outputArr = [];
  var commandsArr = commandsArrayForCell(command);
  var state = null;
  var tone = null;
  var memory = initialMemory;
  var accent = null;
  var random = null;
  var modeJ = null;
  for (var idx in commandsArr) {
    var currCommand = commandsArr[idx];
    if (currCommand[0]) {
      // this is a valid command, see if it needs to be evaluated
      if (currCommand[0] === "activate") {
        modeJ = indexOfValidMode(data, currCommand[1]);
        if (modeJ > 0) {
          state = data[0][modeJ];
          selectedArr[1][modeJ] = 2;
          // recursively evaluate outputArr[1]
          var retval = processCommand(data, data[1][modeJ], memory, []);
          var _iteratorNormalCompletion7 = true;
          var _didIteratorError7 = false;
          var _iteratorError7 = undefined;

          try {
            for (var _iterator7 = retval[0][Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
              command = _step7.value;

              outputArr.push(replaceMemoryZones(command, memory));
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
          if (retval[5]) {
            random = retval[5];
          }
          // NOTE: we don't pass modeJ here since we disallow activate in header cells
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
        // TODO: initialMemory only?
        memory = parseInt(initialMemory) + 1 + "";
      } else if (currCommand[0] === "converse") {
        // 40% 1, 40% 2, 20% 3
        random = "" + (Math.floor(Math.random() * 5) % 3 + 1);
      }
    }
    outputArr.push(replaceMemoryZones(rawStrArr[idx], memory));
  }
  return [outputArr, state, tone, memory, accent, random, modeJ];
}

// Ensures every line has opening followed by closing paren
function textIsValidCommand(text) {
  var strArr = text.split("\n");
  var _iteratorNormalCompletion8 = true;
  var _didIteratorError8 = false;
  var _iteratorError8 = undefined;

  try {
    for (var _iterator8 = strArr[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
      var str = _step8.value;

      var idx = str.indexOf('(');
      var idx2 = str.indexOf(')');
      if (!(idx > 0 && idx2 > idx)) {
        return false;
      }
    }
  } catch (err) {
    _didIteratorError8 = true;
    _iteratorError8 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion8 && _iterator8.return) {
        _iterator8.return();
      }
    } finally {
      if (_didIteratorError8) {
        throw _iteratorError8;
      }
    }
  }

  return true;
}

function textHasEmptyLine(text) {
  var strArr = text.split("\n");
  var _iteratorNormalCompletion9 = true;
  var _didIteratorError9 = false;
  var _iteratorError9 = undefined;

  try {
    for (var _iterator9 = strArr[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
      var str = _step9.value;

      if (str.length == 0) {
        return true;
      }
    }
  } catch (err) {
    _didIteratorError9 = true;
    _iteratorError9 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion9 && _iterator9.return) {
        _iterator9.return();
      }
    } finally {
      if (_didIteratorError9) {
        throw _iteratorError9;
      }
    }
  }

  return false;
}

function textOnlyHasOneOfEachBracketPerLine(text) {
  var strArr = text.split("\n");
  var _iteratorNormalCompletion10 = true;
  var _didIteratorError10 = false;
  var _iteratorError10 = undefined;

  try {
    for (var _iterator10 = strArr[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
      var str = _step10.value;

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
    _didIteratorError10 = true;
    _iteratorError10 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion10 && _iterator10.return) {
        _iterator10.return();
      }
    } finally {
      if (_didIteratorError10) {
        throw _iteratorError10;
      }
    }
  }

  return true;
}

function textHasValidSubCommand(text) {
  var strArr = text.split("\n");
  var _iteratorNormalCompletion11 = true;
  var _didIteratorError11 = false;
  var _iteratorError11 = undefined;

  try {
    for (var _iterator11 = strArr[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
      var str = _step11.value;

      var idx = str.indexOf('[');
      var idx2 = str.indexOf(']');
      if (idx > 0 && idx2 < idx || idx2 > 0 && idx < 0) {
        return false;
      }
    }
  } catch (err) {
    _didIteratorError11 = true;
    _iteratorError11 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion11 && _iterator11.return) {
        _iterator11.return();
      }
    } finally {
      if (_didIteratorError11) {
        throw _iteratorError11;
      }
    }
  }

  return true;
}

function textHasMemoryBetweenBrackets(text) {
  var strArr = text.split("\n");
  var _iteratorNormalCompletion12 = true;
  var _didIteratorError12 = false;
  var _iteratorError12 = undefined;

  try {
    for (var _iterator12 = strArr[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
      var str = _step12.value;

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
    _didIteratorError12 = true;
    _iteratorError12 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion12 && _iterator12.return) {
        _iterator12.return();
      }
    } finally {
      if (_didIteratorError12) {
        throw _iteratorError12;
      }
    }
  }

  return null;
}

function errorStringForCellText(text, data, modeIdx) {
  if (text.length == 0) {
    return null;
  }
  if (textHasEmptyLine(text)) {
    return "! Empty line detected";
  }
  if (!textIsValidCommand(text)) {
    return "! Every line needs text and ()";
  }
  var actText = activateMispellings(text);
  if (actText) {
    return actText;
  }
  var badMode = cellInvalidStateForActivate(data, text, modeIdx);
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

function longestLineCountForText(text) {
  var strArr = text.split("\n");
  var count = 0;
  var _iteratorNormalCompletion13 = true;
  var _didIteratorError13 = false;
  var _iteratorError13 = undefined;

  try {
    for (var _iterator13 = strArr[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
      var str = _step13.value;

      var lineLen = str.length;
      if (lineLen > count) {
        count = lineLen;
      }
    }
  } catch (err) {
    _didIteratorError13 = true;
    _iteratorError13 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion13 && _iterator13.return) {
        _iterator13.return();
      }
    } finally {
      if (_didIteratorError13) {
        throw _iteratorError13;
      }
    }
  }

  return count;
}

var maxLineLenForInput = 25;

function lineCountForText(data, i) {
  var count = 0;
  var _iteratorNormalCompletion14 = true;
  var _didIteratorError14 = false;
  var _iteratorError14 = undefined;

  try {
    for (var _iterator14 = data[i][Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
      var text = _step14.value;

      var strArr = text.split("\n");
      var tempCount = 0;
      var _iteratorNormalCompletion15 = true;
      var _didIteratorError15 = false;
      var _iteratorError15 = undefined;

      try {
        for (var _iterator15 = strArr[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
          var str = _step15.value;

          // NOTE: this doesn't work
          tempCount += 1 + str.length / maxLineLenForInput;
        }
      } catch (err) {
        _didIteratorError15 = true;
        _iteratorError15 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion15 && _iterator15.return) {
            _iterator15.return();
          }
        } finally {
          if (_didIteratorError15) {
            throw _iteratorError15;
          }
        }
      }

      if (tempCount > count) {
        count = tempCount;
      }
    }
  } catch (err) {
    _didIteratorError14 = true;
    _iteratorError14 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion14 && _iterator14.return) {
        _iterator14.return();
      }
    } finally {
      if (_didIteratorError14) {
        throw _iteratorError14;
      }
    }
  }

  return count;
}

function lineCountForTextEdge(text) {
  var strArr = text.split("\n");
  var count = 0;
  var _iteratorNormalCompletion16 = true;
  var _didIteratorError16 = false;
  var _iteratorError16 = undefined;

  try {
    for (var _iterator16 = strArr[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
      var str = _step16.value;

      // NOTE: this doesn't work
      count += 1 + str.length / maxLineLenForInput;
    }
  } catch (err) {
    _didIteratorError16 = true;
    _iteratorError16 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion16 && _iterator16.return) {
        _iterator16.return();
      }
    } finally {
      if (_didIteratorError16) {
        throw _iteratorError16;
      }
    }
  }

  return count;
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
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState({ modified: true });
      this.props.onCellChange(e, this.props.i, this.props.j);
    }
  }, {
    key: 'render',
    value: function render() {
      var activate = activateCommandFromCommandArray(commandsArrayForCell(this.props.value));
      // method that returns a string of whats wrong based on data and this.props.value
      var error = errorStringForCellText(this.props.value, this.props.data, this.props.j);
      var errorComp = !(this.props.i == 0 || this.props.j == 0) && error ? React.createElement(
        'div',
        { style: { fontSize: "10", backgroundColor: errorMessageRed, padding: "0 2 2 2", margin: "2 2 2 2" } },
        error
      ) : null;
      var color = this.props.i == 0 || this.props.j == 0 ? "black" : !this.state.modified ? unmodifiedTextColor : "black";
      var backgroundColor = this.props.i == 0 || this.props.j == 0 ? textOnBackgroundGray : !errorComp && this.props.value.length > 0 || this.props.wasUsed ? cellTextFieldGray : cellTextFieldError;
      var border = activate ? "3px solid " + textPurple : "1px solid black";
      var padding = activate ? "2 2 2 2" : "4 4 4 4";
      var rowsNum = Math.min(this.props.j == 0 ? lineCountForTextEdge(this.props.value) + 1 : lineCountForText(this.props.data, this.props.i) + 1, 5);
      return [this.props.i == 0 ? React.createElement(
        'h3',
        { style: { color: textPurple } },
        'Mode ',
        this.props.j
      ) : null, React.createElement('textarea', { style: { color: color, backgroundColor: backgroundColor, border: border, padding: padding },
        value: this.props.value,
        rows: rowsNum // lineCountForText(this.props.value)
        , cols: maxLineLenForInput // longestLineCountForText(this.props.value)
        , onChange: this.handleChange,
        spellcheck: false

      }), errorComp];
    }
  }]);

  return InputCell;
}(React.Component);

var ReadOnlyCell = function (_React$Component2) {
  _inherits(ReadOnlyCell, _React$Component2);

  function ReadOnlyCell(props) {
    _classCallCheck(this, ReadOnlyCell);

    var _this2 = _possibleConstructorReturn(this, (ReadOnlyCell.__proto__ || Object.getPrototypeOf(ReadOnlyCell)).call(this, props));

    _this2.handleClick = _this2.handleClick.bind(_this2);
    return _this2;
  }

  _createClass(ReadOnlyCell, [{
    key: 'handleClick',
    value: function handleClick(e) {
      this.props.onCellClick(e, this.props.i, this.props.j);
    }
  }, {
    key: 'render',
    value: function render() {
      var backgroundColor = this.props.isSelected ? viewModeSelectionColor : "transparent";
      var text = this.props.value.length > 0 ? this.props.value : this.props.data[2][this.props.j];
      return React.createElement(
        'span',
        { style: { backgroundColor: backgroundColor }, onClick: this.handleClick },
        text
      );
      // return <div style={{backgroundColor:backgroundColor, width:"auto", height:"auto"}} onClick={this.handleClick}>Click</div>
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
    key: 'onCellEvent',
    value: function onCellEvent(e, i, j) {
      this.props.onCellEvent(e, i, j);
    }
  }, {
    key: 'render',
    value: function render() {
      var viewText = this.props.truncate && this.props.i != 0 && this.props.j != 0 ? "Click Me!" : this.props.text;
      var wasUsed = this.props.selectedArr ? this.props.selectedArr[this.props.i][this.props.j] == 2 : false;
      var isNew = this.props.selectedArr ? this.props.selectedArr[this.props.i][this.props.j] == 1 : false;
      var tdStyle = !this.props.editingMode || !this.props.selectedArr || this.props.i == 0 || this.props.j == 0 ? this.props.isHeader ? middleGray : "transparent" : wasUsed ? utilYes : isNew ? "transparent" : utilNo;
      if (this.props.isHeader) {
        var allowInput = this.props.isInteractable && this.props.editingMode;
        var selectedHeader = !allowInput && this.props.i == 0 && this.props.modeJ == this.props.j ? viewModeSelectionColor : tdStyle;
        return React.createElement(
          'th',
          { style: { backgroundColor: selectedHeader } },
          !allowInput ? React.createElement(
            'h3',
            { style: { color: textPurple, margin: "0 0 0 0" } },
            viewText
          ) : React.createElement(InputCell, { value: this.props.text, onCellChange: this.onCellEvent, i: this.props.i, j: this.props.j, data: this.props.data })
        );
      } else {
        return React.createElement(
          'td',
          { style: { backgroundColor: tdStyle } },
          !this.props.isInteractable ? viewText : !this.props.editingMode ? React.createElement(ReadOnlyCell, { value: viewText, onCellClick: this.onCellEvent, i: this.props.i, j: this.props.j, isSelected: this.props.isSelected, data: this.props.data }) : React.createElement(InputCell, { wasUsed: this.props.selectedArr, value: this.props.text, onCellChange: this.onCellEvent, i: this.props.i, j: this.props.j, data: this.props.data })
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
    key: 'onCellEvent',
    value: function onCellEvent(e, i, j) {
      this.props.onCellEvent(e, i, j);
    }
  }, {
    key: 'moveup',
    value: function moveup() {
      this.props.moveup(this.props.i);
    }
  }, {
    key: 'movedown',
    value: function movedown() {
      this.props.movedown(this.props.i);
    }
  }, {
    key: 'alterTruncation',
    value: function alterTruncation() {
      this.setState(function (state, props) {
        return { truncateMore: !state.truncateMore };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      // add a cell with two buttons
      var buttonStyle = { color: textOnBackgroundGray, fontSize: 15, backgroundColor: "transparent", backgroundRepeat: "no-repeat", border: "none", overflow: "hidden", outline: "none" };
      var upButton = this.props.i > 3 ? React.createElement(
        'button',
        { style: buttonStyle, onClick: this.moveup },
        '\u2191'
      ) : null;
      var downButton = this.props.i >= 3 && this.props.i < this.props.data.length - 1 ? React.createElement(
        'button',
        { style: buttonStyle, onClick: this.movedown },
        '\u2193'
      ) : null;
      var buttonCell = React.createElement(
        'td',
        null,
        upButton,
        React.createElement('br', null),
        downButton
      );
      var arr = this.props.editing ? [buttonCell] : [];
      for (var j = 0; j < this.props.width; j++) {
        var uninteractable = j == 0 && this.props.i == 1 || this.props.i == 2 && j == 0 || this.props.i == 0 && j == 0; // not interactable
        var isHeader = j == 0 || this.props.i == 0 || this.props.i == 1; // non clickable in view mode, and bolder text
        if (this.props.i == 0 && j == 0) {
          if (this.props.editing && this.props.children[0]) {
            // bank
            arr.push(React.createElement(
              'th',
              { style: { backgroundColor: middleGray } },
              this.props.children[0]
            ));
          } else {
            // checkbox
            arr.push(React.createElement(
              'th',
              { style: { backgroundColor: middleGray, color: textOnBackgroundGray } },
              React.createElement(
                'button',
                { onClick: this.props.truncFunc },
                this.props.truncate ? "Show Full Text" : "Shorten Text"
              )
            ));
          }
        } else {
          arr.push(React.createElement(Cell, { truncate: this.props.truncate, modeJ: this.props.modeJ, selectedArr: this.props.selectedArr, isHeader: isHeader, isInteractable: !uninteractable, isSelected: j == this.props.selectedJ, editingMode: this.props.editing, text: this.props.data[this.props.i][j], onCellEvent: this.onCellEvent, i: this.props.i, j: j, data: this.props.data }));
        }
      }
      if (this.props.i == 0) {
        arr.push(React.createElement(
          'td',
          null,
          this.props.children[1]
        ));
      }
      return React.createElement(
        'tr',
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

    _this5.state = { truncateMore: false };

    _this5.onCellEvent = _this5.onCellEvent.bind(_this5);
    _this5.moveup = _this5.moveup.bind(_this5);
    _this5.movedown = _this5.movedown.bind(_this5);
    _this5.alterTruncation = _this5.alterTruncation.bind(_this5);
    return _this5;
  }

  _createClass(Table, [{
    key: 'onCellEvent',
    value: function onCellEvent(e, i, j) {
      this.props.onCellEvent(e, i, j);
    }
  }, {
    key: 'moveup',
    value: function moveup(i) {
      this.props.moveup(i);
    }
  }, {
    key: 'movedown',
    value: function movedown(i) {
      this.props.movedown(i);
    }
  }, {
    key: 'alterTruncation',
    value: function alterTruncation() {
      this.setState(function (state, props) {
        return { truncateMore: !state.truncateMore };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var arr = [];
      for (var i = 0; i < heightFromDoubleArray(this.props.data); i++) {
        arr.push(React.createElement(
          Row,
          { truncate: this.state.truncateMore, truncFunc: this.alterTruncation, modeJ: this.props.modeJ, selectedArr: this.props.selectedArr, moveup: this.moveup, movedown: this.movedown, editing: this.props.editing, width: widthFromDoubleArray(this.props.data), i: i, selectedJ: i == this.props.selectedI ? this.props.selectedJ : -1, onCellEvent: this.onCellEvent, data: this.props.data },
          this.props.children
        ));
      }
      arr.push(React.createElement(
        'tr',
        null,
        React.createElement('td', null),
        React.createElement(
          'td',
          null,
          this.props.children.slice(2, 4)
        )
      ));
      return React.createElement(
        'table',
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
    key: 'memoryUpdate',
    value: function memoryUpdate(e) {
      this.props.onChange(e);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'span',
          null,
          'MEMORY: '
        ),
        React.createElement('textarea', { rows: 1, style: { verticalAlign: "top", backgroundColor: textOnBackgroundGray }, spellcheck: false, value: this.props.memory, onChange: this.memoryUpdate })
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
    key: 'onChange',
    value: function onChange(e) {
      this.props.onChange(e);
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.editing) {
        return null;
      }

      var dotDisplay = "inline"; //this.props.count > 0 ? "inline" : "none"
      var border = this.props.count > 0 ? "8px solid green" : "none";
      var padding = this.props.count > 0 ? "7 7 7 7" : "15 15 15 15";
      var color = this.props.count > 0 ? utilYes : middleGray;
      var paddington = this.props.count > 0 ? "7" : "15";
      var bank = this.props.bank.length > 0 ? this.props.bank : "[empty]";

      return [React.createElement(
        'div',
        { style: { display: "inline-block", backgroundColor: middleGray, width: "64%", border: border, padding: padding } },
        React.createElement(
          'span',
          { style: { fontSize: 25, fontWeight: "bold" } },
          'MODE: '
        ),
        React.createElement(
          'span',
          { style: { fontSize: 25, fontWeight: "bold", color: textPurple } },
          this.props.mode
        ),
        React.createElement('br', null),
        React.createElement(
          'span',
          { style: { float: "right", whiteSpace: "pre-wrap", fontSize: 18 } },
          "Bank:\n",
          this.props.bank
        ),
        React.createElement(
          'h2',
          null,
          'TONE: ',
          this.props.tone
        ),
        React.createElement(
          'h2',
          null,
          'ACCENT: ',
          this.props.accent
        ),
        React.createElement(MemoryUnit, { memory: this.props.memory, onChange: this.onChange }),
        React.createElement(
          'span',
          { style: { display: "inline-block", padding: "20 20 20 0", verticalAlign: "top", fontSize: "20" } },
          'RAND: ',
          this.props.random
        ),
        React.createElement(
          'span',
          { style: { color: color, display: dotDisplay, fontSize: 60 } },
          '***'
        ),
        React.createElement('br', null),
        React.createElement(
          'span',
          { style: { color: "black", fontSize: "30", fontWeight: "bold", backgroundColor: textPurple, whiteSpace: "pre-wrap" } },
          this.props.command
        )
      ), React.createElement(
        'div',
        { style: { position: "relative", display: "inline-block", height: "300px", verticalAlign: "top", margin: "20 0 0 0", backgroundColor: middleGray, width: "30%", border: border, padding: padding } },
        React.createElement(
          'span',
          { style: { fontSize: 25, fontWeight: "bold" } },
          'MODE: '
        ),
        React.createElement(
          'span',
          { style: { fontSize: 25, fontWeight: "bold", color: textPurple, whiteSpace: "pre-wrap" } },
          this.props.mode
        ),
        React.createElement('br', null),
        React.createElement(
          'h2',
          { style: {} },
          'TONE: ',
          this.props.tone
        ),
        React.createElement(
          'span',
          { style: { whiteSpace: "pre-wrap", fontSize: 18 } },
          "Bank:\n",
          bank
        ),
        React.createElement('img', { src: 'apex_logo.png', width: '150px', height: '75px', style: { position: "absolute", right: paddington, bottom: paddington } })
      )];
    }
  }]);

  return Spotlight;
}(React.Component);

var Menu = function (_React$Component8) {
  _inherits(Menu, _React$Component8);

  function Menu(props) {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));
  }

  _createClass(Menu, [{
    key: 'render',
    value: function render() {
      var width = this.props.editing && this.props.up ? canvasDim : "auto";
      console.log(width);
      return this.props.up ? React.createElement(
        'div',
        { style: { backgroundColor: "black", zIndex: "3", padding: "3px 3px 3px 3px", position: "fixed", top: "0", right: "0", width: width } },
        this.props.children
      ) : React.createElement(
        'div',
        { style: { backgroundColor: middleGray, zIndex: "0", padding: "3px 3px 3px 3px", position: "fixed", bottom: "0", right: "0", width: width } },
        this.props.children
      );
    }
  }]);

  return Menu;
}(React.Component);

var App = function (_React$Component9) {
  _inherits(App, _React$Component9);

  function App(props) {
    _classCallCheck(this, App);

    var _this9 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    var bank = localStorage.getItem(localStorageBankKey) || initialBank1.join('\n');
    var data = JSON.parse(localStorage.getItem(localStorageProgramKey)) || initialData1;

    _this9.state = {
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
      nextAccent: "[empty]",
      selectedArr: "",
      prevSelectedArr: "",
      showCanvas: false,
      showButtons: false,
      count: 0,
      showLegend: true
    };

    localStorage.setItem(localStorageProgramKey, JSON.stringify(data));
    localStorage.setItem(localStorageBankKey, bank);

    _this9.onToggle = _this9.onToggle.bind(_this9);
    _this9.onCellEvent = _this9.onCellEvent.bind(_this9);
    _this9.bankUpdate = _this9.bankUpdate.bind(_this9);
    _this9.loadData1 = _this9.loadData1.bind(_this9);
    _this9.loadData2 = _this9.loadData2.bind(_this9);
    _this9.loadData3 = _this9.loadData3.bind(_this9);
    _this9.onRowAdd = _this9.onRowAdd.bind(_this9);
    _this9.onRowRemove = _this9.onRowRemove.bind(_this9);
    _this9.onColumnAdd = _this9.onColumnAdd.bind(_this9);
    _this9.onColumnRemove = _this9.onColumnRemove.bind(_this9);
    _this9.memoryUpdate = _this9.memoryUpdate.bind(_this9);
    _this9.updateSpotlight = _this9.updateSpotlight.bind(_this9);
    _this9.moveup = _this9.moveup.bind(_this9);
    _this9.movedown = _this9.movedown.bind(_this9);
    _this9.clearUsageHighlights = _this9.clearUsageHighlights.bind(_this9);
    _this9.showPrevUtilization = _this9.showPrevUtilization.bind(_this9);
    _this9.noErrorsInNonEdgeCells = _this9.noErrorsInNonEdgeCells.bind(_this9);
    _this9.showGraph = _this9.showGraph.bind(_this9);
    _this9.hideCanvas = _this9.hideCanvas.bind(_this9);
    _this9.showHideButtons = _this9.showHideButtons.bind(_this9);
    _this9.showHideLegend = _this9.showHideLegend.bind(_this9);
    return _this9;
  }

  _createClass(App, [{
    key: 'onToggle',
    value: function onToggle(e) {
      if (this.state.editing) {
        // we are transitioning to view

        // selectedArray with false in every non edge zone
        var newSelectedMap = [];
        for (var i = 0; i < this.state.data.length; i++) {
          var row = this.state.data[i];
          var selectedRow = [];
          for (var j = 0; j < row.length; j++) {
            if (i == 0 || j == 0) {
              // TODO: if we just don't highlight these as visited we could
              //   push false here and simplify loop
              selectedRow.push(true);
            } else {
              selectedRow.push(false);
            }
          }
          newSelectedMap.push(selectedRow);
        }
        this.updateSpotlight(1, 1, newSelectedMap, 1);
        this.setState({ showCanvas: false, prevSelectedArr: "" });
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
    key: 'memoryUpdate',
    value: function memoryUpdate(e) {
      this.setState({ memory: e.target.value });
    }
  }, {
    key: 'updateSpotlight',
    value: function updateSpotlight(i, j, selectedArr, initModeJ) {
      selectedArr[i][j] = 2;
      var unprocessedCommand = this.state.data[i][j].length > 0 ? this.state.data[i][j] : this.state.data[2][j];
      var retval = processCommand(this.state.data, unprocessedCommand, this.state.memory, selectedArr);

      // fields that are updated immediately based on selected command
      var command = retval[0].join("\n");
      var mode = retval[1] ? retval[1] : this.state.data[0][j];
      var memory = retval[3] ? retval[3] : this.state.memory;
      var random = retval[5] ? retval[5] : "" + (Math.floor(Math.random() * 4) + 1);
      var modeJ = retval[6] ? retval[6] : initModeJ ? initModeJ : this.state.modeJ;

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
        accent: accent,
        random: random,
        modeJ: modeJ,
        selectedArr: selectedArr
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this10 = this;

      this.timerID = setInterval(function () {
        return _this10.tick();
      }, 1000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timerID);
    }
  }, {
    key: 'tick',
    value: function tick() {
      var count = this.state.count;
      if (count > 0) {
        count--;
        this.setState({ count: count });
      }
    }
  }, {
    key: 'onCellEvent',
    value: function onCellEvent(e, i, j) {
      if (this.state.editing) {
        var data = this.state.data;
        // run processing on e.target.value
        var finalVal = e.target.value;
        var idx = e.target.value.toLowerCase().indexOf('ext(');
        if (idx >= 0) {
          var str1 = finalVal.substr(0, idx);
          var str2 = finalVal.substr(idx + 4, finalVal.length - (idx + 4));
          finalVal = str1 + 'EXTRAPOLATE_FROM(' + str2;
        }
        idx = e.target.value.toLowerCase().indexOf('act(');
        if (idx >= 0) {
          var _str = finalVal.substr(0, idx);
          var _str2 = finalVal.substr(idx + 4, finalVal.length - (idx + 4));
          finalVal = _str + 'ACTIVATE(' + _str2;
        }
        idx = e.target.value.toLowerCase().indexOf('con(');
        if (idx >= 0) {
          var _str3 = finalVal.substr(0, idx);
          var _str4 = finalVal.substr(idx + 4, finalVal.length - (idx + 4));
          finalVal = _str3 + 'CONVERSE(' + _str4;
        }
        idx = e.target.value.toLowerCase().indexOf('mem(');
        if (idx >= 0) {
          var _str5 = finalVal.substr(0, idx);
          var _str6 = finalVal.substr(idx + 4, finalVal.length - (idx + 4));
          finalVal = _str5 + 'SET_MEMORY(' + _str6;
        }
        idx = e.target.value.toLowerCase().indexOf('acc(');
        if (idx >= 0) {
          var _str7 = finalVal.substr(0, idx);
          var _str8 = finalVal.substr(idx + 4, finalVal.length - (idx + 4));
          finalVal = _str7 + 'SET_ACCENT(' + _str8;
        }
        idx = e.target.value.toLowerCase().indexOf('ton(');
        if (idx >= 0) {
          var _str9 = finalVal.substr(0, idx);
          var _str10 = finalVal.substr(idx + 4, finalVal.length - (idx + 4));
          finalVal = _str9 + 'SET_TONE(' + _str10;
        }

        data[i][j] = finalVal;

        this.setState({ data: data, showCanvas: false, modeRemoveWarning: false, inputRemoveWarning: false });
        localStorage.setItem(localStorageProgramKey, JSON.stringify(data));
      } else {
        // also update the map
        // if e.value is empty
        this.setState({ count: 2 });
        this.updateSpotlight(i, j, this.state.selectedArr);
      }
    }
  }, {
    key: 'bankUpdate',
    value: function bankUpdate(e) {
      this.setState({ bank: e.target.value });
      localStorage.setItem(localStorageBankKey, e.target.value);
    }
  }, {
    key: 'moveup',
    value: function moveup(i) {
      var oldData = this.state.data;
      var lineToMove = oldData[i];
      var lineToSwap = oldData[i - 1];
      oldData[i - 1] = lineToMove;
      oldData[i] = lineToSwap;
      var oldPrevSelected = this.state.prevSelectedArr;
      if (oldPrevSelected !== "") {
        var lineToMove = oldPrevSelected[i];
        var lineToSwap = oldPrevSelected[i - 1];
        oldPrevSelected[i - 1] = lineToMove;
        oldPrevSelected[i] = lineToSwap;
      }
      var oldSelectedArr = this.state.selectedArr;
      if (oldSelectedArr !== "") {
        var lineToMove = oldSelectedArr[i];
        var lineToSwap = oldSelectedArr[i - 1];
        oldSelectedArr[i - 1] = lineToMove;
        oldSelectedArr[i] = lineToSwap;
      }
      this.setState({ data: oldData, prevSelectedArr: oldPrevSelected, selectedArr: oldSelectedArr, showCanvas: false, modeRemoveWarning: false, inputRemoveWarning: false });
    }
  }, {
    key: 'movedown',
    value: function movedown(i) {
      var oldData = this.state.data;
      var lineToMove = oldData[i];
      var lineToSwap = oldData[i + 1];
      oldData[i + 1] = lineToMove;
      oldData[i] = lineToSwap;
      var oldPrevSelected = this.state.prevSelectedArr;
      if (oldPrevSelected !== "") {
        var lineToMove = oldPrevSelected[i];
        var lineToSwap = oldPrevSelected[i + 1];
        oldPrevSelected[i + 1] = lineToMove;
        oldPrevSelected[i] = lineToSwap;
      }
      var oldSelectedArr = this.state.selectedArr;
      if (oldSelectedArr !== "") {
        var lineToMove = oldSelectedArr[i];
        var lineToSwap = oldSelectedArr[i + 1];
        oldSelectedArr[i + 1] = lineToMove;
        oldSelectedArr[i] = lineToSwap;
      }
      this.setState({ data: oldData, prevSelectedArr: oldPrevSelected, selectedArr: oldSelectedArr, showCanvas: false, modeRemoveWarning: false, inputRemoveWarning: false });
    }
  }, {
    key: 'onRowAdd',
    value: function onRowAdd(e) {
      var newData = this.state.data;
      var lastRow = newData[newData.length - 1].slice();
      lastRow[0] = "NEW INPUT";
      newData.push(lastRow);
      var oldPrevSelected = this.state.prevSelectedArr;
      if (oldPrevSelected !== "") {
        var newRow = [];
        for (var idx in lastRow) {
          newRow.push(1);
        }
        oldPrevSelected.push(newRow);
      }
      var oldSelectedArr = this.state.selectedArr;
      if (oldSelectedArr !== "") {
        var newRow = [];
        for (var idx in lastRow) {
          newRow.push(1);
        }
        oldSelectedArr.push(newRow);
      }
      this.setState({ data: newData, prevSelectedArr: oldPrevSelected, selectedArr: oldSelectedArr, showCanvas: false, modeRemoveWarning: false, inputRemoveWarning: false });
      localStorage.setItem(localStorageProgramKey, JSON.stringify(newData));
    }
  }, {
    key: 'onRowRemove',
    value: function onRowRemove(e) {
      if (this.state.inputRemoveWarning) {
        var oldData = this.state.data;
        var newData = oldData.slice(0, -1);
        var oldPrevSelected = this.state.prevSelectedArr;
        if (oldPrevSelected !== "") {
          oldPrevSelected = oldPrevSelected.slice(0, -1);
        }
        var oldSelectedArr = this.state.selectedArr;
        if (oldSelectedArr !== "") {
          oldSelectedArr = oldSelectedArr.slice(0, -1);
        }
        this.setState({ data: newData, prevSelectedArr: oldPrevSelected, selectedArr: oldSelectedArr, showCanvas: false, modeRemoveWarning: false });
        localStorage.setItem(localStorageProgramKey, JSON.stringify(newData));
      }
      this.setState({ inputRemoveWarning: !this.state.inputRemoveWarning });
    }
  }, {
    key: 'onColumnAdd',
    value: function onColumnAdd(e) {
      var newData = this.state.data;
      for (var i = 0; i < newData.length; i++) {
        if (i) {
          newData[i].push(newData[i][newData[i].length - 1]);
        } else {
          newData[i].push("NEW MODE");
        }
      }
      var oldPrevSelected = this.state.prevSelectedArr;
      if (oldPrevSelected !== "") {
        var _iteratorNormalCompletion17 = true;
        var _didIteratorError17 = false;
        var _iteratorError17 = undefined;

        try {
          for (var _iterator17 = oldPrevSelected[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
            var row = _step17.value;

            row.push(1);
          }
        } catch (err) {
          _didIteratorError17 = true;
          _iteratorError17 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion17 && _iterator17.return) {
              _iterator17.return();
            }
          } finally {
            if (_didIteratorError17) {
              throw _iteratorError17;
            }
          }
        }
      }
      var oldSelectedArr = this.state.selectedArr;
      if (oldSelectedArr !== "") {
        var _iteratorNormalCompletion18 = true;
        var _didIteratorError18 = false;
        var _iteratorError18 = undefined;

        try {
          for (var _iterator18 = oldSelectedArr[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
            var row = _step18.value;

            row.push(1);
          }
        } catch (err) {
          _didIteratorError18 = true;
          _iteratorError18 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion18 && _iterator18.return) {
              _iterator18.return();
            }
          } finally {
            if (_didIteratorError18) {
              throw _iteratorError18;
            }
          }
        }
      }
      this.setState({ data: newData, prevSelectedArr: oldPrevSelected, selectedArr: oldSelectedArr, showCanvas: false, modeRemoveWarning: false, inputRemoveWarning: false });
      localStorage.setItem(localStorageProgramKey, JSON.stringify(newData));
    }
  }, {
    key: 'onColumnRemove',
    value: function onColumnRemove(e) {
      if (this.state.modeRemoveWarning) {
        var newData = this.state.data;
        for (var i = 0; i < newData.length; i++) {
          newData[i] = newData[i].slice(0, -1);
        }
        var oldPrevSelected = this.state.prevSelectedArr;
        if (oldPrevSelected !== "") {
          for (var i = 0; i < oldPrevSelected.length; i++) {
            oldPrevSelected[i] = oldPrevSelected[i].slice(0, -1);
          }
        }
        var oldSelectedArr = this.state.selectedArr;
        if (oldSelectedArr !== "") {
          for (var i = 0; i < oldSelectedArr.length; i++) {
            oldSelectedArr[i] = oldSelectedArr[i].slice(0, -1);
          }
        }
        this.setState({ data: newData, prevSelectedArr: oldPrevSelected, selectedArr: oldSelectedArr, showCanvas: false, inputRemoveWarning: false });
        localStorage.setItem(localStorageProgramKey, JSON.stringify(newData));
      }
      this.setState({ modeRemoveWarning: !this.state.modeRemoveWarning });
    }
  }, {
    key: 'loadData1',
    value: function loadData1() {
      this.setState({ bank: initialBank1.join('\n'), data: initialData1, selectedI: 0, selectedJ: 0, selectedArr: "", prevSelectedArr: "", showButtons: false });
      localStorage.setItem(localStorageProgramKey, JSON.stringify(initialData1));
      localStorage.setItem(localStorageBankKey, initialBank1.join('\n'));
    }
  }, {
    key: 'loadData2',
    value: function loadData2() {
      this.setState({ bank: initialBank2.join('\n'), data: initialData2, selectedI: 0, selectedJ: 0, selectedArr: "", prevSelectedArr: "", showButtons: false });
      localStorage.setItem(localStorageProgramKey, JSON.stringify(initialData2));
      localStorage.setItem(localStorageBankKey, initialBank2.join('\n'));
    }
  }, {
    key: 'loadData3',
    value: function loadData3() {
      this.setState({ bank: initialBank3.join('\n'), data: initialData3, selectedI: 0, selectedJ: 0, selectedArr: "", prevSelectedArr: "", showButtons: false });
      localStorage.setItem(localStorageProgramKey, JSON.stringify(initialData3));
      localStorage.setItem(localStorageBankKey, initialBank3.join('\n'));
    }
  }, {
    key: 'clearUsageHighlights',
    value: function clearUsageHighlights(e) {
      this.setState(function (state, props) {
        return { prevSelectedArr: state.selectedArr, selectedArr: "" };
      });
    }
  }, {
    key: 'showPrevUtilization',
    value: function showPrevUtilization(e) {
      this.setState(function (state, props) {
        return { selectedArr: state.prevSelectedArr, prevSelectedArr: "" };
      });
    }
  }, {
    key: 'clearStorage',
    value: function clearStorage(e) {
      localStorage.setItem(localStorageProgramKey, null);
      localStorage.setItem(localStorageBankKey, "");
      // TODO: can I just trigger a refresh here? think through this more...
    }
  }, {
    key: 'noErrorsInNonEdgeCells',
    value: function noErrorsInNonEdgeCells(data) {
      for (var i = 0; i < data.length; i++) {
        var row = data[i];
        for (var j = 0; j < row.length; j++) {
          if (i != 0 && j != 0) {
            if (errorStringForCellText(data[i][j], data, j)) {
              return false;
            }
          }
        }
      }
      return true;
    }
  }, {
    key: 'showGraph',
    value: function showGraph(e) {
      var c = document.getElementById("canvas");
      var ctx = c.getContext("2d");

      // first we validate there are no errors in non edge cells    
      var shouldShow = this.noErrorsInNonEdgeCells(this.state.data);
      if (!shouldShow) {
        ctx.font = "20px Arial";
        ctx.fillStyle = "red";
        ctx.fillText("FIX ERRORS!", 140, 200);

        this.setState({ showCanvas: true });

        return;
      }

      // modes array
      var modesArr = [];
      for (var i = 1; i < this.state.data[0].length; i++) {
        modesArr.push(this.state.data[0][i]);
      }

      // each element is a pair: mode to next mode
      var arrowsArray = [];
      for (var i = 2; i < this.state.data.length; i++) {
        var row = this.state.data[i];
        for (var j = 1; j < row.length; j++) {
          // ok we've got the cell: go through its commands to see if there are activates
          var commandsArr = commandsArrayForCell(this.state.data[i][j]);
          for (var idx in commandsArr) {
            var currCommand = commandsArr[idx];
            if (currCommand[0]) {
              if (currCommand[0] === "activate") {
                var modeJ = indexOfValidMode(this.state.data, currCommand[1]);
                if (modeJ > 0) {
                  arrowsArray.push([j - 1, modeJ - 1]);
                }
              }
            }
          }
        }
      }
      arrowsArray = arrowsArray.sort();

      drawGraph(ctx, modesArr, arrowsArray);

      this.setState({ showCanvas: true });
    }
  }, {
    key: 'hideCanvas',
    value: function hideCanvas(e) {
      var c = document.getElementById("canvas");
      var ctx = c.getContext("2d");

      ctx.beginPath();
      ctx.rect(0, 0, canvasDim, canvasDim);
      ctx.fillStyle = textOnBackgroundGray;
      ctx.fill();

      this.setState({ showCanvas: false });
    }
  }, {
    key: 'showHideButtons',
    value: function showHideButtons(e) {
      this.setState({ showButtons: !this.state.showButtons });
    }
  }, {
    key: 'showHideLegend',
    value: function showHideLegend(e) {
      this.setState({ showLegend: !this.state.showLegend });
    }
  }, {
    key: 'render',
    value: function render() {
      var buttonDisplayStyle = !this.state.editing || !this.state.showButtons ? "none" : "inline-block";
      var buttonDisplayStyle2 = !this.state.editing || !this.state.showLegend ? "none" : "inline";
      var toggleButtonText = this.state.editing ? 'Go To Viewing' : 'Go To Editing';
      var clearUsageButtonStyle = !this.state.editing || !this.state.selectedArr || !this.state.showButtons ? "none" : "inline-block";
      var canvasViz = this.state.showCanvas ? "inline-block" : "none";
      var hideCanvas = this.state.showCanvas && this.state.showButtons ? React.createElement(
        'button',
        { onClick: this.hideCanvas },
        'Hide Mode Diagram'
      ) : null;
      var showCanvas = !this.state.showCanvas && this.state.showButtons ? React.createElement(
        'button',
        { style: { display: buttonDisplayStyle }, onClick: this.showGraph },
        'Generate Mode Diagram'
      ) : null;
      var showUsageButtonStyle = !this.state.editing || !this.state.prevSelectedArr || !this.state.showButtons ? "none" : "inline-block";
      var editModeBreak = this.state.editing && this.state.showButtons ? React.createElement('br', null) : null;
      var buttonToggleDisplay = this.state.editing ? "inline" : "none";

      var but1 = !this.state.editing || !this.state.showLegend ? null : [React.createElement(
        'span',
        { style: { color: textOnBackgroundGray, margin: "0 0 0 20", display: buttonDisplayStyle2 } },
        'CON('
      ), React.createElement('br', null), React.createElement('br', null)];
      var but2 = !this.state.editing || !this.state.showLegend ? null : [React.createElement(
        'span',
        { style: { color: textOnBackgroundGray, margin: "0 0 0 20", display: buttonDisplayStyle2 } },
        'TON('
      ), React.createElement('br', null), React.createElement('br', null)];
      var but3 = !this.state.editing || !this.state.showLegend ? null : [React.createElement(
        'span',
        { style: { color: textOnBackgroundGray, margin: "0 0 0 20", display: buttonDisplayStyle2 } },
        'EXT('
      ), React.createElement('br', null), React.createElement('br', null)];
      var but4 = !this.state.editing || !this.state.showLegend ? null : [React.createElement(
        'span',
        { style: { color: textOnBackgroundGray, margin: "0 0 0 20", display: buttonDisplayStyle2 } },
        'ACT('
      ), React.createElement('br', null), React.createElement('br', null)];

      return [React.createElement(
        'div',
        { style: { display: this.state.editing ? "block" : "none" } },
        React.createElement(
          'span',
          { style: { fontSize: "60", fontWeight: "bold", color: "white" } },
          'The_SpeakEZ'
        ),
        React.createElement(
          'span',
          null,
          'v1.0'
        ),
        React.createElement(
          'span',
          { style: { marginLeft: "30" } },
          'presented by '
        ),
        React.createElement(
          'span',
          { style: { fontStyle: "italic" } },
          'APEX DYNAMICS'
        ),
        React.createElement('br', null),
        React.createElement('br', null)
      ), React.createElement(
        'div',
        null,
        React.createElement(
          Menu,
          { editing: this.state.editing, up: true },
          React.createElement(
            'button',
            { style: { float: "right" }, onClick: this.onToggle },
            toggleButtonText
          ),
          React.createElement(
            'button',
            { style: { float: "right", display: buttonToggleDisplay }, onClick: this.showHideButtons },
            this.state.showButtons ? "Close Settings" : "Open Settings"
          ),
          editModeBreak,
          editModeBreak,
          showCanvas,
          hideCanvas,
          React.createElement(
            'button',
            { style: { display: clearUsageButtonStyle }, onClick: this.clearUsageHighlights },
            'Hide Code Utilization'
          ),
          React.createElement(
            'button',
            { style: { display: showUsageButtonStyle }, onClick: this.showPrevUtilization },
            'Reveal Code Utilization'
          ),
          editModeBreak,
          editModeBreak,
          React.createElement(
            'button',
            { style: { display: buttonDisplayStyle }, onClick: this.loadData1 },
            'Load Default'
          ),
          React.createElement(
            'button',
            { style: { display: buttonDisplayStyle }, onClick: this.loadData2 },
            'Load #2'
          ),
          React.createElement(
            'button',
            { style: { display: buttonDisplayStyle }, onClick: this.loadData3 },
            'Load #3'
          ),
          editModeBreak,
          React.createElement(
            'button',
            { style: { display: buttonDisplayStyle }, onClick: this.clearStorage },
            'Clear Saved Code (refresh browser)'
          )
        ),
        React.createElement(Spotlight, { count: this.state.count, bank: this.state.bank, editing: this.state.editing, command: this.state.command, mode: this.state.mode, accent: this.state.accent, tone: this.state.tone, memory: this.state.memory, random: this.state.random, onChange: this.memoryUpdate }),
        React.createElement(
          'div',
          null,
          React.createElement(
            'div',
            null,
            React.createElement(
              Table,
              { modeJ: this.state.modeJ, selectedArr: this.state.selectedArr, moveup: this.moveup, movedown: this.movedown, editing: this.state.editing, onCellEvent: this.onCellEvent, data: this.state.data, selectedI: this.state.selectedI, selectedJ: this.state.selectedJ },
              React.createElement(
                'div',
                null,
                React.createElement(
                  'span',
                  { style: { color: textPurple } },
                  'Bank'
                ),
                React.createElement('br', null),
                React.createElement('textarea', { style: { backgroundColor: textOnBackgroundGray }, spellcheck: false, rows: 7, onChange: this.bankUpdate, value: this.state.bank })
              ),
              React.createElement(
                'div',
                { style: { display: "inline-block" } },
                React.createElement(
                  'button',
                  { style: this.state.editing ? { display: "block", fontSize: 20, color: utilYes, backgroundColor: "transparent", backgroundRepeat: "no-repeat", border: "none", overflow: "hidden", outline: "none" } : { display: "none" }, onClick: this.onColumnAdd },
                  '+'
                ),
                React.createElement('br', null),
                React.createElement(
                  'button',
                  { style: this.state.editing && widthFromDoubleArray(this.state.data) > 2 ? { display: "block", fontSize: 20, color: textOnBackgroundGray, backgroundColor: "transparent", backgroundRepeat: "no-repeat", border: "none", overflow: "hidden", outline: "none" } : { display: "none" }, onClick: this.onColumnRemove },
                  this.state.modeRemoveWarning ? "-?" : "-"
                )
              ),
              React.createElement(
                'button',
                { style: this.state.editing ? { display: "inline", fontSize: 20, color: utilYes, backgroundColor: "transparent", backgroundRepeat: "no-repeat", border: "none", overflow: "hidden", outline: "none" } : { display: "none" }, onClick: this.onRowAdd },
                '+'
              ),
              React.createElement(
                'button',
                { style: this.state.editing && heightFromDoubleArray(this.state.data) > 3 ? { display: "inline", fontSize: 20, marginLeft: "20px", color: textOnBackgroundGray, backgroundColor: "transparent", backgroundRepeat: "no-repeat", border: "none", overflow: "hidden", outline: "none" } : { display: "none" }, onClick: this.onRowRemove },
                this.state.inputRemoveWarning ? "-?" : "-"
              )
            )
          ),
          React.createElement('br', null)
        ),
        React.createElement(
          'div',
          { style: { position: "fixed", width: canvasDim - 10, right: "0", bottom: canvasDim, backgroundColor: unmodifiedTextColor, display: canvasViz, padding: "5 5 5 5", color: textPurple } },
          'MODE DIAGRAM'
        ),
        React.createElement('canvas', { id: 'canvas', width: canvasDim, height: canvasDim, style: { zIndex: "2", position: "fixed", right: "0", bottom: "0", backgroundColor: textOnBackgroundGray, display: canvasViz } }),
        React.createElement(
          Menu,
          { editing: this.state.editing, up: false },
          but1,
          but2,
          but3,
          but4,
          React.createElement(
            'button',
            { style: { float: "right", display: buttonToggleDisplay }, onClick: this.showHideLegend },
            this.state.showLegend ? "Hide Legend" : "Show Legend"
          )
        )
      )];
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.querySelector('#reactTable'));

/* thinking */
// What are the fuzzy boundaries?
// - Bank: EXACT (you get lightweight exact influence)
// - Tone: does it influence words or just style?
// - Converse: influenced by tone for sure
// - Extrapolate from: influenced by bank only? maybe a little bit of tone coloring in word choice
// - the random numbers can skew how influenced you are. you can word a little bit in the reverse. but do you always need to incorporate something they are telling you to do?

/* Seek Feedback? */
// [SMALL] toggle errors on and off as part of validation?
// Should I prevent going to viewing mode with errors?
// probably empty cells should still get red highlighting?
// SpeakEZ could also be a color hmmm....
// tiny bug where refreshing on an empty bank will replace with digital dialogue message

/* Media Testing */
// empty livelab
// share to livelab to see what it looks like
// share to chrome tab or livelab
// I could make two versions of spotlight if helpful, and then only one could be screengrabbed for OBS
// aiactors could zoom in the livelab tab to just focus on their part

/* Once its all over */
// Try Redux
// Update readme

/* Security concerns */
// can people see my url
// is it at all a spoiler if people can go in and see default code and play around with it? 
// is it ok if people play around with it after the show? this makes not being able to upload sort of a benefit lol

/* Server Backup Thoughts */
// If not, then I'm dealing with broadcasting to some other website basically a POST request. 
//   I could choose which inputID to accept receiving from maybe on the receiver side? lightweight password system
// This has been a big time commitment