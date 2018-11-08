import User from "../models/user"; // 10. Now we bring in the user from user.js
import Frog from "../models/frog";


let _racers = [] //11. We need an empty array for the frog racers 
let _user = new User()

export default class RaceService { //5. Now we created that race service
  constructor() {

  }
  addFrog(frogData) { //21. Now we want to add the addFrog method
    let frog = new Frog(frogData) //22. 
    _racers.push(frog)
  }
  getRacers() { //23. 
    return JSON.parse(JSON.stringify(_racers))
  }
  getBalance() {  //32. Now we write the function so that note 30 will work
    return _user.accountBalance
  }
  bet(index) { // 34. 
    if (_user.accountBalance >= 10 && _racers[index]) {
      _racers[index].bet += 10
      _user.accountBalance -= 10
    }
  }
  race() { //36. get a random winner between 0 and the last index of racers
    let winnerIndex = Math.floor(Math.random() * _racers.length)
    let winner = _racers[winnerIndex]
    let winnerName = winner.name
    _user.accountBalance += winner.bet * _racers.length
    _racers = []
    return winnerName
  }
}