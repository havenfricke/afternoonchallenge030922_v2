import { getGlobalThis } from "@vue/shared"
import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class HousesService {
  async getAll() {
    const res = await api.get('api/houses')
    logger.log('got your houses', res.data)
    AppState.houses = res.data
  }

  async listHouse(houseData) {
    const res = await api.post('api/houses', houseData)
    logger.log('posted your house', res.data)
    AppState.houses.push(res.data)
  }

  async editHosue(houseData) {
    const res = await api.put('api/houses/' + houseData.id, houseData)
    logger.log('updated house', res.data)
    AppState.houses = res.data
  }

}

export const housesService = new HousesService()