import CarsController from "./Controllers/CarsController.js";

class App {

  carsController = new CarsController();
  housesController = new HousesController();
  jobsController = new JobsController();

}

window["app"] = new App();
