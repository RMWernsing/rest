import { locationsService } from "../services/LocationsService.js";
import { missionsService } from "../services/MissionsService.js";
import { ratsService } from "../services/RatsService.js";
import BaseController from "../utils/BaseController.js";

export class LocationsController extends BaseController {
  constructor() {
    super('api/locations')
    this.router
      .get('', this.getAllLocations)
      .get('/:locationId/missions', this.getMissionByLocationId)
  }

  /**
* @param {import("express").Request} request
* @param {import("express").Response} response
* @param {import("express").NextFunction} next
*/
  async getAllLocations(request, response, next) {
    try {
      const locations = await locationsService.getAllLocations()
      response.send(locations)
    } catch (error) {
      next(error)
    }
  }

  /**
* @param {import("express").Request} request
* @param {import("express").Response} response
* @param {import("express").NextFunction} next
*/
  async getMissionByLocationId(request, response, next) {
    try {
      const locationId = request.params.locationId
      const mission = await missionsService.getMissionByLocationId(locationId)
      response.send(mission)
    } catch (error) {
      next(error)
    }
  }
}