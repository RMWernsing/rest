import { missionsService } from "../services/MissionsService.js";
import BaseController from "../utils/BaseController.js";

export class MissionsController extends BaseController {
  constructor() {
    super('api/missions')
    this.router
      .get('', this.getAllMissions)
      .post('', this.createMission)
      .put('/:missionId', this.updateMission)
  }

  /**
* @param {import("express").Request} request
* @param {import("express").Response} response
* @param {import("express").NextFunction} next
*/
  async getAllMissions(request, response, next) {
    try {
      const missions = await missionsService.getAllMissions()
      response.send(missions)
    } catch (error) {
      next(error)
    }
  }

  /**
* @param {import("express").Request} request
* @param {import("express").Response} response
* @param {import("express").NextFunction} next
*/
  async createMission(request, response, next) {
    try {
      const missionData = request.body
      const mission = await missionsService.createMission(missionData)
      response.send(mission)
      //comment
    } catch (error) {
      next(error)
    }
  }

  async updateMission(request, response, next) {
    try {
      const missionId = request.params.missionId
      const missionToUpdate = request.body
      const mission = await missionsService.updateMission(missionId, missionToUpdate)
      response.send(mission)
    } catch (error) {
      next(error)
    }
  }
}