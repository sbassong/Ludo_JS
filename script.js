//global variables
const redStartPoint = document.querySelector('#c1')
const greenStartPoint = document.querySelector('#c14')
const yellowStartPoint = document.querySelector('#c27')
const blueStartPoint = document.querySelector('#c40')
let cell = document.querySelector(`.${}${}`)
let startsFrom = ''


//Die functionality
// const dieDiv = document.querySelector('.die')
const throwDie = () => Math.ceil(Math.random() * 6)
let dieVal = 0


//pawn class and methods/behavior
class Pawn  {
  constructor (color) {
    this.color = color
  }

  startsFrom(target) {
    if (target.id.parentElement.id.StartsWith('red-')) {
      target.parentElement.removeChild(target)
      redStartingPoint.appendChild(target)
    } else if (target.id.parentElement.id.StartsWith('green-')) {
      target.parentElement.removeChild(target)
      greenStartingPoint.appendChild(target)
    } else if (target.id.parentElement.id.StartsWith('yellow-')) {
      target.parentElement.removeChild(target)
      yellowStartingPoint.appendChild(target)
    } else {
      target.parentElement.removeChild(target)
      blueStartingPoint.appendChild(target)
    }
  }

  movePawn(e) {
    let curPawn = e.target
    if (curPawn.parentElement.id.startsWith())
    startsFrom
    
    curPawn
    


  }
}

// console.log(throwDie())
// console.log(throwDie())
// console.log(throwDie())
// console.log(throwDie())
// console.log(throwDie())