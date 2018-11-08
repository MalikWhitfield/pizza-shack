import RaceController from "./components/raceController.js" //4. Now we import the c;ass


// 1. Insert the class App
class App {
  constructor() {
    this.controllers = {
      raceController: new RaceController() // 2. Now we create a race controller
    }
  }
}


// @ts-ignore
window.app = new App() //7. Make the app show on the window with this line