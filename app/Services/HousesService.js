import { ProxyState } from "../AppState.js";
import House from "../Models/House.js";
import { api } from "./AxiosService.js";


class HousesService {
  async getHouses() {
    let res = await api.get('houses')
    console.log(res.data)
    ProxyState.houses = res.data.map(h => new House(h))
  }

  async createHouse(newHouse) {
    // NOTE post creates data in the server, the first argument to extend the url the second is the data to send
    let res = await api.post('houses', newHouse)
    console.log(res.data)


    // the lazy way
    // this.getCars()

    // the longhand way
    res.data.id = res.data._id
    let house = new House(res.data)
    ProxyState.houses = [...ProxyState.houses, house]
  }
  async bid(id) {
    // step 1: find the car
    let house = ProxyState.houses.find(house => house.id === id)
    // step 2: modify it
    house.price += 200

    // step 3: send update to server
    await api.put('houses/' + id, { price: house.price })
    // await api.put('cars/' + id, car)


    // step 4: trigger the proxystate that a change was made
    ProxyState.houses = ProxyState.houses
  }
  async deleteCar(id) {
    // restful convention for a delete route is '/collectionName/:id' (the ':' indicates a variable value does not need to be added)
    await api.delete('cars/' + id)
    ProxyState.cars = ProxyState.cars.filter(car => car.id != id)
  }

}

export const housesService = new HousesService();

