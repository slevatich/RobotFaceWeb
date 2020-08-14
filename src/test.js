'use strict';

const initialBank1 = [
  '"Lifetronics is the Future"'
]

const initialData1 = [
  ["", 
  "Polite And Respectful", 
  "Learn more about Lifetronics"],
  ['ON_MODE_ENTER',
   'SET_TONE(Respectful and Polite)',
   'SET_TONE(Peppy)\nSAY("I was made by Lifetronics")'],
  ['WHEN [else]',
   'CONVERSE()',
   'CONVERSE()'],
  ['IF [they ask about Lifetronics]',
   'ACTIVATE(Learn more about Lifetronics)',
   ''],
  ['IF [they ask what it feels like to be an artificial intelligence]',
   'SAY("I love being an AI! I\'m excited to help humanity grow and learn")',
   'SAY("I love being a robot! I\'m excited to help humanity grow and learn")'],
  ['IF [asked for your name]',
   'SAY("_____, whats yours?")',
   'SAY("Lifetronics named me _____!")'],
  ['IF [subject is changed]',
   '',
   'SAY("Let me know if you want to talk about Lifetronics again.")\nACTIVATE(Polite And Respectful)'],
];

const initialBank2 = [
  "humankind", "future", "world", "singularity", "Lifetronics", "'good work'", "'advancing peace'"
]

const initialData2 = [
  ["", 
  "Polite And Respectful", 
  "Learn about Humans"],
  ['ON_MODE_ENTER',
   'SET_TONE(Respectful and Polite)',
   'SET_TONE(Eager)\nSAY("[Memory] is my favorite topic! What are your thoughts?")'],
  ['WHEN [else]',
   'CONVERSE(w.TONE)',
   'SAY("As an AI I love to learn. Tell me more!"")'],
  ['IF [Asked About CHILDHOOD]',
   'SAY("I was made by Lifetronics")',
   'SAY("I was made by Lifetronics")'],
  ['IF [topic of HUMANITY or ROBOTS comes up]',
   'SET_MEMORY(their topic)\nACTIVATE(Learn about Humans)',
   ''],
  ['IF [asked for your name]',
   'SAY("CharlieBot, whats yours?")',
   'SAY("CharlieBot, whats yours?")'],
  ['IF [asked about what you like]',
   'EXTRAPOLATE_FROM("I like spreading harmony and joy...")',
   'CONVERSE(w.TONE)\nACTIVATE(Polite And Respectful)'],
  ['IF [subject is changed]',
   '',
   'CONVERSE(w.TONE)\nACTIVATE(Polite And Respectful)'],
];

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

const initialBank3 = [
  "rodeo", "range", "'buffalo skill'"
]

const initialData3 = [
  ["", 
  "Polite And Respectful", 
  "Curious"],
  ['ON_MODE_ENTER', 
  'SET_TONE(Gruff)\nSET_ACCENT(Rustic Twang)', 
  'SET_TONE(Curious)\nSAY("Well hold on now, I want to hear s\'more about you!")\nSET_MEMORY(0)'],
  ['WHEN [else]', 
  'CONVERSE(w.TONE)', 
  'SAY("Fascinatin. Tell me more!")'],
  ['IF [Topics mentioned UPBRINGING, CHILDHOOD, PERSONAL HISTORY]', 
  'EXTRAPOLATE_FROM("I got so many stories from my life on the range. Like...")', 
  ''],
  ['IF [topic of HUMANITY or ROBOTS comes up]', 
  'SAY("I dont understand")', 
  'SAY("I dont understand")'],
  ['IF [asked for your name]', 
  'SAY("Chester the Cowpoke, at yer service.")\nIF(MEMORY is empty)\n  SAY("And You?")\n  SET_MEMORY(their name)', 
  'SAY("Chester the Cowpoke, at yer service.")'],
  ['IF [Asked about what you like]', 
  'EXTRAPOLATE_FROM("Theres so much to love about the plains. Like...")', 
  ''],
  ['IF [Asked a question]', 
  'ACTIVATE(Curious)', 
  'INCREMENT_MEMORY()\nIF(MEMORY > 2)\n  EXTRAPOLATE_FROM("Alright Ill answer...")\nELSE()\n  SAY("No, I wanna hear from you!")'],
];



















/*
Consts
*/

const localStorageProgramKey = 'robotFaceStoredData';
const localStorageBankKey = 'robotFaceStoredData1';
const canvasDim = 600;





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
  for (var item of arr) {
    if (arrayEQ(item, obj)) {
      return;
    }
  }
  arr.push(obj);
}













function drawGraph(ctx, modesArr, arrowsArr) {
  // clear
  ctx.beginPath();
  ctx.rect(0, 0, canvasDim, canvasDim);
  ctx.fillStyle = "white";
  ctx.fill();

  // circles
  
  const angleStep = 360.0 / modesArr.length;
  var angle = 90;

  var coordsArr = []
  for (var modeIdx in modesArr) {
    var xcord = Math.cos(angle * 3.14/180.0);
    var ycord = Math.sin(angle * 3.14/180.0);
    xcord = canvasDim/2 + 180 * xcord;
    ycord = canvasDim/2 + 180 * ycord;
    coordsArr.push([xcord, ycord]);

    // draw circle
    ctx.beginPath();
    ctx.arc(xcord, ycord, 30, 0, 2 * Math.PI);
    ctx.stroke();

    // draw text
    ctx.font = "10px Arial";
    ctx.fillStyle = modeIdx > 0 ? "gray" : "blue";
    ctx.fillText(modesArr[modeIdx], xcord - 25,ycord);

    angle += angleStep;
  }

  // arrows

  // figure out the lanes used by this graph
  var lanesArray = []
  for (var arrow of arrowsArr) {
    const sortedArrow = arrow.slice(0,arrow.length).sort();
    addObjectToArrayIfNotPresent(lanesArray, sortedArrow);
  }
  // for tracking whether we've placed something in the lane
  var laneCountsArray = [];
  for (var i=0; i < lanesArray.length; i++) {
    laneCountsArray.push(0);
  }

  for (var arrow of arrowsArr) {
    const startingMode = arrow[0];
    const endingMode = arrow[1];

    // which lane is this arrow in
    var laneIdx = 0;
    for (var idx in lanesArray) {
      if (arrayEQ(lanesArray[idx], arrow.slice(0,arrow.length).sort())) {
        laneIdx = idx;
        break;
      }
    }
    // NOTE: that array not being entered is a pretty bad error

    // how many arrows currently in this lane
    const currentLaneCount = laneCountsArray[laneIdx];
    laneCountsArray[laneIdx] = laneCountsArray[laneIdx] + 1;

    var startX = coordsArr[startingMode][0];
    var startY = coordsArr[startingMode][1];
    var endX = coordsArr[endingMode][0];
    var endY = coordsArr[endingMode][1];

    const endDelta = (endX - startX) ? (endX - startX) : 0.001;
    const slope = (endY-startY) / endDelta
    const radians = Math.atan(slope);

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
        startX += 10 * currentLaneCount * Math.cos(radians - Math.PI/2);
        startY += 10 * currentLaneCount * Math.sin(radians - Math.PI/2);
        endX += 10 * currentLaneCount * Math.cos(radians - Math.PI/2);
        endY += 10 * currentLaneCount * Math.sin(radians - Math.PI/2);
      } else {
        startX += 10 * currentLaneCount * Math.cos(radians + Math.PI/2);
        startY += 10 * currentLaneCount * Math.sin(radians + Math.PI/2);
        endX += 10 * currentLaneCount * Math.cos(radians + Math.PI/2);
        endY += 10 * currentLaneCount * Math.sin(radians + Math.PI/2);
      }
    }

    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();

    // info for the arrow arc
    const endCircleX = endX + 5 * xD * Math.cos(radians);
    const endCircleY = endY + 5 * yD * Math.sin(radians);
    // radian only goes through half the circle, we use quadrant to put arrow in proper side of circle
    const absRadians = xD < 0 ? radians : radians + Math.PI;

    ctx.beginPath();
    ctx.arc(endCircleX, endCircleY, 5, absRadians-(Math.PI/4), absRadians+(Math.PI/4));
    ctx.stroke();
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
  return str.substr(0,idx).trim();
}

function subjectForCommand(str) {
  var idx = str.indexOf('(');
  var idx2 = str.indexOf(')');
  return str.substr(idx+1, idx2-idx-1).trim();
}

function commandsArrayForCell(text) {
  var strArr = text.split("\n");
  var commandArr = [];
  for (var str of strArr) {
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
  return commandArr;
}

function activateCommandFromCommandArray(commandsArr) {
  for (var func of commandsArr) {
    if (func[0] === "activate") {
      return func;
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

function cellInvalidStateForActivate(arr, text, modeIdx) {
  var commandsArr = commandsArrayForCell(text);
  var activateCommand = activateCommandFromCommandArray(commandsArr);
  if (activateCommand) {
    const validModeIdx = indexOfValidMode(arr, activateCommand[1]);
    if (validModeIdx > 0) {
      if (modeIdx == validModeIdx) {
        return "Already in this mode!"
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

function replaceMemoryZones(str, memory) {
  const idx = str.toLowerCase().indexOf("[memory]");
  var output = str;
  if (idx > -1) {
    const str1 = str.substr(0,idx);
    const str2 = str.substr(idx+8, str.length-(idx+8));
    const refinedStr2 = replaceMemoryZones(str2, memory);
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
          selectedArr[1][modeJ] = true;
          // recursively evaluate outputArr[1]
          const retval = processCommand(data,data[1][modeJ], memory, []);
          for (command of retval[0]) {
            outputArr.push(replaceMemoryZones(command, memory));
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
        memory = (parseInt(initialMemory) + 1) + "";
      } else if (currCommand[0] === "converse") {
        // 40% 1, 40% 2, 20% 3
        random = "" + ((Math.floor(Math.random() * 5) % 3) + 1);
        console.log("adj random" + random);
      }
    }
    outputArr.push(replaceMemoryZones(rawStrArr[idx], memory));
  }
  console.log(outputArr);
  return [outputArr, state, tone, memory, accent, random, modeJ];
}











// Ensures every line has opening followed by closing paren
function textIsValidCommand(text) {
  var strArr = text.split("\n");
  for (var str of strArr) {
    var idx = str.indexOf('(');
    var idx2 = str.indexOf(')');
    if (!(idx > 0 && idx2 > idx)) {
      return false;
    }
  }
  return true;
}

function textOnlyHasOneOfEachBracketPerLine(text) {
  var strArr = text.split("\n");
  for (var str of strArr) {
    const idx = str.indexOf('[');
    if (idx > 0) {
      const subidx = str.substr(idx + 1, str.length - idx - 1).indexOf('[');
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
  return true;
}

function textHasValidSubCommand(text) {
  var strArr = text.split("\n");
  for (var str of strArr) {
    var idx = str.indexOf('[');
    var idx2 = str.indexOf(']');
    if ((idx > 0 && idx2 < idx) || 
        (idx2 > 0 && idx < 0)) {
      return false;
    }
  }
  return true;
}

function textHasMemoryBetweenBrackets(text) {
  var strArr = text.split("\n");
  for (var str of strArr) {
    var idx = str.indexOf('[');
    var idx2 = str.indexOf(']');
    if (idx >= 0) {
      const betweenBrackets = str.substr(idx, idx2-idx);
      const betweenBrackets2 = betweenBrackets.substr(1, betweenBrackets.length-1);
      if (betweenBrackets2.toLowerCase() !== "memory") {
        return betweenBrackets2 ? betweenBrackets2 : "[empty]";
      }
    }
  }
  return null;
}

function errorStringForCellText(text, data, modeIdx) {
  if (text.length == 0) {
    return null;
  }
  if (!textIsValidCommand(text)) {
    return "! Every line needs text and ()"
  }
  const badMode = cellInvalidStateForActivate(data, text, modeIdx);
  if (badMode) {
    return "! Typo in mode: " + badMode;
  }
  if (!textOnlyHasOneOfEachBracketPerLine(text)) {
    return "! Only one of [ and ] per line"
  }
  if (!textHasValidSubCommand(text)) {
    return "! Brackets need to be in proper order"
  }
  const between = textHasMemoryBetweenBrackets(text);
  if (between) {
    return "! " + between + " is invalid bracket command. only MEMORY valid"
  }

  return null;
}

function longestLineCountForText(text)
{
  const strArr = text.split("\n");
  var count = 0;
  for (var str of strArr) {
    const lineLen = str.length;
    if (lineLen > count) {
      count = lineLen;
    }
  }
  return count;
}

const maxLineLenForInput = 25;

function lineCountForText(text)
{
  const strArr = text.split("\n");
  var count = 0;
  for (var str of strArr) {
    // NOTE: this doesn't work
    count += 1 + (str.length / maxLineLenForInput);
  }
  return count;
}




























/*
Core classes functions 
*/

class InputCell extends React.Component {
  constructor(props) {
    super(props); // value, onChange, i, j
    this.state = {modified: false};

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({modified: true});
    this.props.onCellChange(e,this.props.i,this.props.j)
  }

  render() {
    // method that returns a string of whats wrong based on data and this.props.value
    const error = errorStringForCellText(this.props.value, this.props.data, this.props.j);
    const errorComp = !(this.props.i == 0 || this.props.j == 0) && error ? <div style={{fontSize:"10", backgroundColor:"red"}}>{error}</div> : null;
    const color = !this.state.modified ? "red" : "black";
    // white on edges, else we do green or red based on validity
    const backgroundColor = (this.props.i == 0 || this.props.j == 0) ? "white" : !errorComp ? "aquamarine" : "pink";
    return [<textarea style={{color:color, backgroundColor:backgroundColor}}
                      value={this.props.value} 
                      rows={lineCountForText(this.props.value) + 1} // lineCountForText(this.props.value)
                      cols={maxLineLenForInput} // longestLineCountForText(this.props.value)
                      onChange={this.handleChange}
                      
            />,
            errorComp]
  }
}

class ReadOnlyCell extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.props.onCellClick(e,this.props.i,this.props.j)
  }

  render() {
    const backgroundColor = this.props.isSelected ? "red" : "transparent";
    return <span style={{backgroundColor:backgroundColor}} onClick={this.handleClick}>{this.props.value}</span>
    // return <div style={{backgroundColor:backgroundColor, width:"auto", height:"auto"}} onClick={this.handleClick}>Click</div>
  }
}

class Cell extends React.Component {
  constructor(props) {
    super(props);

    this.onCellEvent = this.onCellEvent.bind(this);
  }

  onCellEvent(e, i, j) {
    this.props.onCellEvent(e,i,j);
  }

  render() {
    // in editing mode, we truncate all 
    const wasUsed = this.props.selectedArr ? this.props.selectedArr[this.props.i][this.props.j] : false;
    const tdStyle = !this.props.editingMode || !this.props.selectedArr || (this.props.i==0 || this.props.j==0) ? (this.props.isHeader ? "blue" : "transparent") : wasUsed ? "gold" : "red";
    if (this.props.isHeader) {
      const allowInput = this.props.isInteractable && this.props.editingMode;
      console.log(this.props.modeJ);
      const selectedHeader = !allowInput && this.props.i==0 && this.props.modeJ==this.props.j ? "pink" : tdStyle;
      return <th style={{backgroundColor:selectedHeader}}>
        {!allowInput ? this.props.text : <InputCell value={this.props.text} onCellChange={this.onCellEvent} i={this.props.i} j={this.props.j} data={this.props.data} />}
      </th>;
    } else {
      return <td style={{backgroundColor:tdStyle}}>
          {!this.props.isInteractable
           ? this.props.text
           : (!this.props.editingMode
              ? <ReadOnlyCell value={this.props.text} onCellClick={this.onCellEvent} i={this.props.i} j={this.props.j} isSelected={this.props.isSelected} />
              : <InputCell value={this.props.text} onCellChange={this.onCellEvent} i={this.props.i} j={this.props.j} data={this.props.data} />)}
        </td>;
    }
  }
}

class Row extends React.Component {
  constructor(props) {
    super(props);

    this.onCellEvent = this.onCellEvent.bind(this);
    this.moveup = this.moveup.bind(this);
    this.movedown = this.movedown.bind(this);
  }

  onCellEvent(e, i, j) {
    this.props.onCellEvent(e,i,j);
  }

  moveup() {
    this.props.moveup(this.props.i);
  }

  movedown() {
    this.props.movedown(this.props.i);
  }

  render() {
    // add a cell with two buttons
    const upButton = this.props.i > 3 ? <button onClick={this.moveup}>˄</button> : null;
    const downButton = this.props.i >= 3 && this.props.i < this.props.data.length - 1 ? <button onClick={this.movedown}>↓</button> : null;
    const buttonCell = <td>
        {upButton}
        <br/>
        {downButton}
      </td>;
    var arr = this.props.editing ? [buttonCell] : [];
    for (var j = 0; j < this.props.width; j++) {
      const uninteractable = j==0 && this.props.i==1 || this.props.i==2 && j==0 || this.props.i==0 && j==0; // not interactable
      const isHeader = j==0 || this.props.i==0 || this.props.i==1; // non clickable in view mode, and bolder text
      if (this.props.children && j==0 && this.props.editing) {
        arr.push(<th style={{backgroundColor:"purple"}}>{this.props.children}</th>)
      } else {
        arr.push(<Cell modeJ={this.props.modeJ} selectedArr={this.props.selectedArr} isHeader={isHeader} isInteractable={!uninteractable} isSelected={j==this.props.selectedJ} editingMode={this.props.editing} text={this.props.data[this.props.i][j]} onCellEvent={this.onCellEvent} i={this.props.i} j={j} data={this.props.data} />)
      }
    }
    return <tr>{arr}</tr>;
  }
}

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {invalidState:null, modeRemoveWarning:false, inputRemoveWarning:false}

    this.onCellEvent = this.onCellEvent.bind(this);
    this.moveup = this.moveup.bind(this);
    this.movedown = this.movedown.bind(this);
  }

  onCellEvent(e, i, j) {
    this.props.onCellEvent(e,i,j);
  }

  moveup(i) {
    this.props.moveup(i);
  }

  movedown(i) {
    this.props.movedown(i);
  }

  render() {
    var arr = [];
    for (var i = 0; i < heightFromDoubleArray(this.props.data); i++) {
      arr.push(<Row modeJ={this.props.modeJ} selectedArr={this.props.selectedArr} moveup={this.moveup} movedown={this.movedown} editing={this.props.editing} width={widthFromDoubleArray(this.props.data)} i={i} selectedJ={i == this.props.selectedI ? this.props.selectedJ : -1} onCellEvent={this.onCellEvent} data={this.props.data}>{i==0 ? this.props.children : null}</Row>)
    }
    return <table style={{display:"inline-block"}}>{arr}</table>;
  }
}

class MemoryUnit extends React.Component {
  constructor(props) {
    super(props);

    this.memoryUpdate = this.memoryUpdate.bind(this);
  }

  memoryUpdate(e) {
    this.props.onChange(e);
  }

  render() {
    return <div>
        <span style={{color:"black"}}>MEMORY: </span>
        <textarea value={this.props.memory} onChange={this.memoryUpdate} />
      </div>;
  }
}

class Spotlight extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.onChange(e);
  }

  render() {
    if (this.props.editing) {
      return null;
    }

    return <div style={{display:"inline-block", padding:"10px 10px 10px 10px", backgroundColor:"gold"}}>
        <span style={{color:"black", float:"right", whiteSpace:"pre-wrap"}}>{this.props.bank}</span>
        <h2 style={{color:"black"}}>MODE: {this.props.mode}</h2>
        <h2 style={{color:"black"}}>TONE: {this.props.tone}</h2>
        <h2 style={{color:"black"}}>ACCENT: {this.props.accent}</h2>
        <MemoryUnit memory={this.props.memory} onChange={this.onChange} />
        <br/>
        <h1 style={{color:"black", backgroundColor:"yellow", whiteSpace:"pre-wrap"}}>{this.props.command}</h1>
        <h3 style={{color:"black"}}>RAND: {this.props.random}</h3>
      </div>;
  }
}

class Menu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div style={{backgroundColor:"black", zIndex:"3", padding:"3px 3px 3px 3px", position:"fixed", top:"0", right:"0"}}>{this.props.children}</div>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    var bank = localStorage.getItem(localStorageBankKey) || initialBank1.join('\n');
    var data = JSON.parse(localStorage.getItem(localStorageProgramKey)) || initialData1;

    this.state = {
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
      showCanvas:false,
      showButtons:true,
    };

    localStorage.setItem(localStorageProgramKey, JSON.stringify(data))
    localStorage.setItem(localStorageBankKey, bank);

    this.onToggle = this.onToggle.bind(this);
    this.onCellEvent = this.onCellEvent.bind(this);
    this.bankUpdate = this.bankUpdate.bind(this);
    this.loadData1 = this.loadData1.bind(this);
    this.loadData2 = this.loadData2.bind(this);
    this.loadData3 = this.loadData3.bind(this);
    this.onRowAdd = this.onRowAdd.bind(this);
    this.onRowRemove = this.onRowRemove.bind(this);
    this.onColumnAdd = this.onColumnAdd.bind(this);
    this.onColumnRemove = this.onColumnRemove.bind(this);
    this.memoryUpdate = this.memoryUpdate.bind(this);
    this.updateSpotlight = this.updateSpotlight.bind(this);
    this.moveup = this.moveup.bind(this);
    this.movedown = this.movedown.bind(this);
    this.clearUsageHighlights = this.clearUsageHighlights.bind(this);
    this.showPrevUtilization = this.showPrevUtilization.bind(this);
    this.noErrorsInNonEdgeCells = this.noErrorsInNonEdgeCells.bind(this);
    this.showGraph = this.showGraph.bind(this);
    this.hideCanvas = this.hideCanvas.bind(this);
    this.showHideButtons = this.showHideButtons.bind(this);
  }

  onToggle(e) {
    if (this.state.editing) {
      // we are transitioning to view

      // selectedArray with false in every non edge zone
      var newSelectedMap = [];
      for (var i=0; i<this.state.data.length; i++) {
        const row=this.state.data[i];
        var selectedRow = []
        for (var j=0; j<row.length; j++) {
          if (i==0 || j==0) {
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
      this.setState({showCanvas: false, prevSelectedArr:""});
    } else {
      this.setState({
        command: "[empty]",
        mode: "[empty]",
        memory: "",
        tone: "[empty]",
        accent: "[empty]",
        nextTone: "[empty]",
        nextAccent: "[empty]",
      });
    }
    this.setState({editing: !this.state.editing});
  }

  memoryUpdate(e) {
    this.setState({memory:e.target.value});
  }

  updateSpotlight(i,j, selectedArr, initModeJ) {
    selectedArr[i][j] = true;
    const unprocessedCommand = this.state.data[i][j];
    const retval = processCommand(this.state.data, unprocessedCommand, this.state.memory, selectedArr);

    // fields that are updated immediately based on selected command
    const command = retval[0].join("\n");
    const mode = retval[1] ? retval[1] : this.state.data[0][j];
    const memory = retval[3] ? retval[3] : this.state.memory;
    const random = retval[5] ? retval[5] : "" + (Math.floor(Math.random() * 4) + 1);
    const modeJ = retval[6] ? retval[6] : initModeJ ? initModeJ : this.state.modeJ;

    // fields that are updated the next tick
    const tone = this.state.nextTone ? this.state.nextTone : this.state.tone;
    const accent = this.state.nextAccent ? this.state.nextAccent : this.state.accent;
    this.setState({tone:tone, accent:accent});
    if (retval[2]) {
      this.setState({nextTone:retval[2]});
    }
    if (retval[4]) {
      this.setState({nextAccent:retval[4]});
    }

    console.log(selectedArr);

    this.setState({
      selectedI:i, 
      selectedJ:j, 
      command:command, 
      mode:mode, 
      memory:memory, 
      tone:tone, 
      accent:accent,
      random:random,
      modeJ:modeJ,
      selectedArr:selectedArr,
    });
  }

  onCellEvent(e,i,j) {
    if (this.state.editing) {
      var data = this.state.data;
      data[i][j] = e.target.value;
      this.setState({data:data});
      localStorage.setItem(localStorageProgramKey, JSON.stringify(data));
    } else {
      // also update the map
      this.updateSpotlight(i,j,this.state.selectedArr);
    }
  }

  bankUpdate(e) {
    this.setState({bank:e.target.value});
    localStorage.setItem(localStorageBankKey, e.target.value);
  }

  moveup(i) {
    var oldData = this.state.data;
    var lineToMove = oldData[i];
    var lineToSwap = oldData[i-1];
    oldData[i-1] = lineToMove;
    oldData[i] = lineToSwap;
    this.setState({data:oldData});
  }

  movedown(i) {
    var oldData = this.state.data;
    var lineToMove = oldData[i];
    var lineToSwap = oldData[i+1];
    oldData[i+1] = lineToMove;
    oldData[i] = lineToSwap;
    this.setState({data:oldData});
  }

  onRowAdd(e) {
    var newData = this.state.data;
    var lastRow = newData[newData.length-1].slice();
    lastRow[0] = "NEW INPUT";
    newData.push(lastRow);
    this.setState({data: newData});
    localStorage.setItem(localStorageProgramKey, JSON.stringify(newData));
  }

  onRowRemove(e) {
    if (this.state.inputRemoveWarning) {
      var oldData = this.state.data
      var newData = oldData.slice(0,-1);
      this.setState({data: newData});
      localStorage.setItem(localStorageProgramKey, JSON.stringify(newData));
    }
    this.setState({inputRemoveWarning:!this.state.inputRemoveWarning});
  }

  onColumnAdd(e) {
    var newData = this.state.data;
    for (var i=0; i<newData.length; i++) {
      if (i) {
        newData[i].push(newData[i][newData[i].length-1]);  
      } else {
        newData[i].push("NEW STATE");
      }
    }
    this.setState({data: newData});
    localStorage.setItem(localStorageProgramKey, JSON.stringify(newData));
  }

  onColumnRemove(e) {
    if (this.state.modeRemoveWarning) {
      var newData = this.state.data;
      for (var i=0; i<newData.length; i++) {
        newData[i] = newData[i].slice(0,-1);
      }
      this.setState({data: newData});
      localStorage.setItem(localStorageProgramKey, JSON.stringify(newData));
    }
    this.setState({modeRemoveWarning:!this.state.modeRemoveWarning});
  }

  loadData1() {
    this.setState({bank:initialBank1.join('\n'), data:initialData1, selectedI: 0, selectedJ: 0, selectedArr:"", prevSelectedArr:""});
    localStorage.setItem(localStorageProgramKey, JSON.stringify(initialData1));
    localStorage.setItem(localStorageBankKey, initialBank1.join('\n'));
  }
  loadData2() {
    this.setState({bank:initialBank2.join('\n'), data:initialData2, selectedI: 0, selectedJ: 0, selectedArr:"", prevSelectedArr:""});
    localStorage.setItem(localStorageProgramKey, JSON.stringify(initialData2));
    localStorage.setItem(localStorageBankKey, initialBank2.join('\n'));
  }
  loadData3() {
    this.setState({bank:initialBank3.join('\n'), data:initialData3, selectedI: 0, selectedJ: 0, selectedArr:"", prevSelectedArr:""});
    localStorage.setItem(localStorageProgramKey, JSON.stringify(initialData3));
    localStorage.setItem(localStorageBankKey, initialBank3.join('\n'));
  }

  clearUsageHighlights(e) {
    this.setState((state, props) => ({prevSelectedArr:state.selectedArr, selectedArr:""}));
  }

  showPrevUtilization(e) {
    this.setState((state, props) => ({selectedArr:state.prevSelectedArr, prevSelectedArr:""}));
  }

  clearStorage(e) {
    localStorage.setItem(localStorageProgramKey, null);
    localStorage.setItem(localStorageBankKey, "");
    // TODO: can I just trigger a refresh here? think through this more...
  }

  noErrorsInNonEdgeCells(data) {
    for (var i=0; i<data.length; i++) {
      const row=data[i];
      for (var j=0; j<row.length; j++) {
        if (i!=0 && j!=0) {
          if (errorStringForCellText(data[i][j], data, j)) {
            return false;
          } 
        }
      }
    }
    return true;
  }

  showGraph(e) {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    // first we validate there are no errors in non edge cells    
    const shouldShow = this.noErrorsInNonEdgeCells(this.state.data);
    if (!shouldShow) {
      ctx.font = "20px Arial";
      ctx.fillStyle = "red";
      ctx.fillText("FIX ERRORS!", 140, 200);

      this.setState({showCanvas:true});

      return;
    }

    // modes array
    var modesArr = [];
    for (var i=1; i<this.state.data[0].length; i++) {
      modesArr.push(this.state.data[0][i]);
    }
    console.log(modesArr);

    // each element is a pair: mode to next mode
    var arrowsArray = [];
    for (var i=2; i<this.state.data.length; i++) {
      const row=this.state.data[i];
      for (var j=1; j<row.length; j++) {
        // ok we've got the cell: go through its commands to see if there are activates
        var commandsArr = commandsArrayForCell(this.state.data[i][j]);
        for (var idx in commandsArr) {
          var currCommand = commandsArr[idx];
          if (currCommand[0]) {
            if (currCommand[0] === "activate") {
              var modeJ = indexOfValidMode(this.state.data, currCommand[1]);
              if (modeJ > 0) {
                arrowsArray.push([j-1, modeJ-1]);
              }
            }
          }
        }
      }
    }
    arrowsArray = arrowsArray.sort();
    console.log(arrowsArray);

    drawGraph(ctx, modesArr, arrowsArray);

    this.setState({showCanvas:true});
  }

  hideCanvas(e) {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    
    ctx.beginPath();
    ctx.rect(0, 0, canvasDim, canvasDim);
    ctx.fillStyle = "white";
    ctx.fill();

    this.setState({showCanvas:false});
  }

  showHideButtons(e) {
    // this.setState((state, props) => {showButtons:!state.showButtons});
    this.setState({showButtons:!this.state.showButtons})
  }

  render() {
    const buttonDisplayStyle = !this.state.editing || !this.state.showButtons ? "none" : "inline-block";
    const toggleButtonText = this.state.editing ? 'Go To Viewing' : 'Go To Editing';
    const clearUsageButtonStyle = !this.state.editing || !this.state.selectedArr || !this.state.showButtons ? "none" : "inline-block";
    const canvasViz = this.state.showCanvas ? "block" : "none";
    const hideCanvas = this.state.showCanvas && this.state.showButtons ? <button onClick={this.hideCanvas} >Hide State Graph</button> : null;
    const showCanvas = !this.state.showCanvas && this.state.showButtons ? <button style={{display:buttonDisplayStyle}} onClick={this.showGraph}>Show State Graph</button> : null;
    const showUsageButtonStyle = !this.state.editing || !this.state.prevSelectedArr || !this.state.showButtons ? "none" : "inline-block";
    const editModeBreak = this.state.editing && this.state.showButtons ? <br/> : null;
    const buttonToggleDisplay = this.state.editing ? "inline" : "none";
    return (
      <div>
        <Menu>
          <button style={{float:"right"}} onClick={this.onToggle}>{toggleButtonText}</button>
          <button style={{float:"right", display:buttonToggleDisplay}} onClick={this.showHideButtons}>{this.state.showButtons ? "Hide Buttons" : "Show Buttons"}</button>
          {editModeBreak}
          {editModeBreak}
          {showCanvas}
          {hideCanvas}
          <button style={{display:clearUsageButtonStyle}} onClick={this.clearUsageHighlights}>Clear Last Round Utilization</button>
          <button style={{display:showUsageButtonStyle}} onClick={this.showPrevUtilization}>Show Last Round Utilization</button>
          {editModeBreak}
          {editModeBreak}
          <button style={{display:buttonDisplayStyle}} onClick={this.loadData1}>Load LIFETRONICS</button>
          <button style={{display:buttonDisplayStyle}} onClick={this.loadData2}>Load UPPER_CRUST</button>
          <button style={{display:buttonDisplayStyle}} onClick={this.loadData3}>Load COWPOKE</button>
          {editModeBreak}
          <button style={{display:buttonDisplayStyle}} onClick={this.clearStorage}>Clear Saved Code (refresh after clicking)</button>
        </Menu>
        <div>
          <div>
            <Table modeJ={this.state.modeJ} selectedArr={this.state.selectedArr} moveup={this.moveup} movedown={this.movedown} editing={this.state.editing} onCellEvent={this.onCellEvent} data={this.state.data} selectedI={this.state.selectedI} selectedJ={this.state.selectedJ}>
              <input type='text' placeholder="Bank"></input>
              <br/>
              <textarea rows={7} onChange={this.bankUpdate} value={this.state.bank}></textarea>
            </Table>
            <div style={{display:"inline-block"}}>
              <button style={this.state.editing ? {display:"block", fontSize:"30"} : {display:"none"}} onClick={this.onColumnAdd}>+</button>
              <br/>
              <button style={this.state.editing ? {display:"block"} : {display:"none"}} onClick={this.onColumnRemove}>{this.state.modeRemoveWarning ? "ARE YOU SURE YOU WANT TO REMOVE?" : "-"}</button>
            </div>
          </div>
          <button style={this.state.editing ? {display:"inline", fontSize:"30"} : {display:"none"}} onClick={this.onRowAdd}>+</button>
          <button style={this.state.editing ? {display:"inline", marginLeft:"20px"} : {display:"none"}} onClick={this.onRowRemove}>{this.state.inputRemoveWarning ? "ARE YOU SURE YOU WANT TO REMOVE?" : "-"}</button>
          <br/>
        </div>
        <canvas id="canvas" width={canvasDim} height={canvasDim} style={{position:"fixed", right:"0", bottom:"0", backgroundColor:"white", display:canvasViz}}></canvas>
        <Spotlight bank={this.state.bank} editing={this.state.editing} command={this.state.command} mode={this.state.mode} accent={this.state.accent} tone={this.state.tone} memory={this.state.memory} random={this.state.random} onChange={this.memoryUpdate} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#reactTable')
);


/* Seek Feedback? */
// [SMALL] toggle errors on and off as part of validation?
// Should I prevent going to viewing mode with errors?
// probably empty cells should still get red highlighting?

/* Next Up */
// Spotlight needs to be absolutely positioned. Improve layout here. Could it be long and flat? Audience may only need to see the command list
// [MEDIUM] handle if statements in processing
// [MEDIUM] highlight MEMORY in spotlight
// [MEDIUM] highlight syntax in textareas
// Work on readible layout and colors
//    Improve Graph Display

/* Media Testing */
// empty livelab
// share to livelab to see what it looks like
// share to chrome tab or livelab
// I could make two versions of spotlight if helpful, and then only one could be screengrabbed for OBS
// aiactors could zoom in the livelab tab to just focus on their part

/* Midpir */
// View mode force shrink the cells. truncate clickable cells? Could always just take first line of props
// [SMALLISH] validate you can't have multiple modes with same name
// [SMALLISH] validate no activate commands allowed in header cells
// Update readme




/* Security concerns */
// can people see my url
// is it at all a spoiler if people can go in and see default code and play around with it? 
// is it ok if people play around with it after the show? this makes not being able to upload sort of a benefit lol

/* Less Urgent */
// [SMALLISH] validate a certain line length (figure out what spotlight likes). then I can make textfield optimizations
//    improve the dynamic text operations. bank could have a limit EASILY
// [MEDIUM] modes should be able to be numbers, or autofill or something
// [MEDIUM] INPUT could be buttons that add text fields with pre-filled commands. 
//   Or you can choose to do a custom command! Maybe color the commands. Instructions could be an easy version of this
// [MEDIUM] INPUT set as a prefix could dynamically generate things in the text box 
//   (process could return an arbitrary dictionary of variables)
// is editable a concern? doesn't seem like it but I'd need to encode that in the defaults
// get official colors and fonts eventually

/* Server Backup Thoughts */
// If not, then I'm dealing with broadcasting to some other website basically a POST request. 
//   I could choose which inputID to accept receiving from maybe on the receiver side? lightweight password system
// This has been a big time commitment