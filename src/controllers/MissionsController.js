import { missionsService } from "../services/MissionsService.js";
import BaseController from "../utils/BaseController.js";

export class MissionsController extends BaseController {
  constructor() {
    super('api/missions')
    this.router
      .get('', this.getAllMissions)
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
}