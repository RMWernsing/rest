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

  async getMissionByRatId(ratId) {
    const mission = await dbContext.Missions.find({ ratId: ratId }).populate('rat', 'callsign')
    return mission
  }

  async getMissionByLocationId(locationId) {
    const mission = await dbContext.Missions.find({ locationId: locationId }).populate('location').populate('rat', 'callsign')
    return mission
  }

  async updateMission(missionId, missionToUpdate) {
    const missionToUpdate = await dbContext.Missions.findById(missionId)
    missionToUpdate.completed = true
  }
}

export const missionsService = new MissionsService()