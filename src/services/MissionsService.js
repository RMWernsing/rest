import { dbContext } from "../db/DbContext.js"

class MissionsService {

  async getAllMissions() {
    const missions = await dbContext.Missions.find().populate('location').populate('rat', 'callsign')
    return missions
  }

  async createMission(missionData) {
    const mission = await dbContext.Missions.create(missionData)
    await mission.populate('location')
    await mission.populate('rat', 'callsign')
    return mission
  }
}

export const missionsService = new MissionsService()