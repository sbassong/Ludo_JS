//global variables
const redStartPoint = document.querySelector('#c1')
const greenStartPoint = document.querySelector('#c14')
const yellowStartPoint = document.querySelector('#c27')
const blueStartPoint = document.querySelector('#c40')
// let cell = document.querySelector(`.${}${}`)



//Die functionality
// const dieDiv = document.querySelector('.die')
let dieVal = 0
const throwDie = () => {
  dieVal = Math.ceil(Math.random() * 6)
}


//pawn class and methods/behavior
// class Pawn  {
//   constructor (color) {
//     this.color = color
//   }

  const startsFrom = (e) => {
    let target = e.target
    console.log(target.id)
    let parent = target.parentElement
    console.log(parent)

    if (target.parent.id.startsWith('red-')) {
      parent.removeChild(target)
      redStartingPoint.appendChild(target)
    } else if (target.parent.id.startsWith('green-')) {
      parent.removeChild(target)
      greenStartingPoint.appendChild(target)
    } else if (target.parent.id.startsWith('yellow-')) {
      parent.removeChild(target)
      yellowStartingPoint.appendChild(target)
    } else {
      parent.removeChild(target)
      blueStartingPoint.appendChild(target)
    }
  }

  // movePawn(e, dieVal) {
  //   let curPawn = e.target
  //   let parent = curPawn.parentElement
  //   if (!curPawn.parent.id.startsWith('c')) { return }
  //   else {
  //     parent.removeChild(target)
  //     let newParent = document.querySelector(`.${parent.id}`)
  //   }
    
  // }
//}

  const redPawn1 = document.getElementById('rhc1')
redPawn1.style.backgroundColor = 'red'
const redPawn2 = document.querySelector('#rhc2')
const redPawn3 = document.querySelector('#rhc3')
const redPawn4 = document.querySelector('#rhc4')

redPawn1.addEventListener('click', startsFrom(e))


