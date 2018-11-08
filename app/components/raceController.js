//private
import RaceService from "./raceService.js" //6. import the race service

let _raceService = new RaceService() // 6.5 create a new raceservice

function drawRacers() { //24. Create a function that will draw the racer to the screen 
  let template = ''
  let frogs = _raceService.getRacers() // 26.
  frogs.forEach((frog, index) => {  //27. Create
    template += `
    <div class="racer>
    <img src="${frog.img}"/>
    <h5>${frog.name}</h5>
    <button class="btn btn-secondary" onclick="app.controllers.raceController.bet(
      ${index} 
    )"> Bet: ${frog.bet} </button> 
    </div>
    `
  });

  document.getElementById('frog').innerHTML = template //25. 
}


function drawMoney() {// 30. we need this drawMoney function so that the money decreases/updates with each bet
  let balance = _raceService.getBalance()
  document.getElementById('balance').innerText = balance.  //31. this is linked to 
}

//public
export default class RaceController {//3. Created the RaceController
  constructor() {
    drawMoney()

  }
  addFrog(event) { //17. Create the function for the button!
    event.preventDefault()
    let form = event.target // 18. 
    let frogData = { //19.
      name: form.name.value,
      img: form.img.value
    }
    _raceService.addFrog(frogData) //20. 
    drawRacers() // 28. 
    form.reset() // 29.
  }
  bet(index) {
    _raceService.bet(index)  // 33.
  }
  race() {  //35.
    let winnerName = _raceService.race()
    document.getElementById('winner').innerText = "WINNER" + winnerName // 37.
    drawMoney()
    drawRacers()
  }
} 
