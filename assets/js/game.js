
/* --code taken and adapted from repo and tutorial https://github.com/WebDevSimplified/JavaScript-Text-Adventure/blob/master/game.js -- */

const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state= {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
}
