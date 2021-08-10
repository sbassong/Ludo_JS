//global variables
const redStartPoint = document.querySelector('#c1')
const greenStartPoint = document.querySelector('#c14')
const yellowStartPoint = document.querySelector('#c27')
const blueStartPoint = document.querySelector('#c40')

const redPawn1 = document.querySelector('#rhc1')
const redPawn2 = document.querySelector('#rhc2')
const redPawn3 = document.querySelector('#rhc3')
const redPawn4 = document.querySelector('#rhc4')

const greenPawn1 = document.querySelector('#ghc1')
const greenPawn2 = document.querySelector('#ghc2')
const greenPawn3 = document.querySelector('#ghc3')
const greenPawn4 = document.querySelector('#ghc4')

const yellowPawn1 = document.querySelector('#yhc1')
const yellowPawn2 = document.querySelector('#yhc2')
const yellowPawn3 = document.querySelector('#yhc3')
const yellowPawn4 = document.querySelector('#yhc4')

const bluePawn1 = document.querySelector('#bhc1')
const bluePawn2 = document.querySelector('#bhc2')
const bluePawn3 = document.querySelector('#bhc3')
const bluePawn4 = document.querySelector('#bhc4')

const pawns = [redPawn1, redPawn2, redPawn3, redPawn4,
  greenPawn1, greenPawn2, greenPawn3, greenPawn4, 
  yellowPawn1, yellowPawn2, yellowPawn3, yellowPawn4,
  bluePawn1, bluePawn2, bluePawn3, bluePawn4]



//Die functionality
// const dieDiv = document.querySelector('.die')
let dieVal = 0
const throwDie = () => {
  dieVal = Math.ceil(Math.random() * 6)
}

//startsFrom -> on dieVal = 
  const startsFrom = (e) => {
    let target = e.target
    console.log(target.id)
    let parent = target.parentElement
    console.log(parent)

    if (target.id.startsWith('rhc')) {
      let child = parent.removeChild(target)
      redStartPoint.appendChild(child)
    } else if (target.id.startsWith('ghc')) {
      let child = parent.removeChild(target)
      greenStartPoint.appendChild(child)
    } else if (target.id.startsWith('yhc')) {
      let child = parent.removeChild(target)
      yellowStartPoint.appendChild(child)
    } else {
      let child = parent.removeChild(target)
      blueStartPoint.appendChild(child)
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




// pawns.forEach(pawn => {
//   pawn.addEventListener('click', startsFrom(e))
// })

pawns.forEach(pawn => {
  pawn.addEventListener('click', function(e) {
    startsFrom(e)
  })
})



