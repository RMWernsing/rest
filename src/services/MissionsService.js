import { dbContext } from "../db/DbContext.js"

class MissionsService {

  async getAllMissions() {
    const missions = await dbContext.Missions.find().populate('location').populate('rat', 'callsign')
    return missions
  }

}

export const missionsService = new MissionsService()