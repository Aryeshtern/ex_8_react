import {FC} from 'react'
import Mission from '../../types/Mission';
import { deleteMission, fetchMissions , updateMission} from '../../services/data';

interface Props {
    mission: Mission;
    setMissions: (missions: Mission[]) => void;
}

const MissionComp: FC<Props> = ({mission, setMissions}) => {

    const handleDelete = async (missionId: string) => {

        await deleteMission(missionId);
        const missions = await fetchMissions();
        setMissions(missions);
    }

    const handleUpdate = async (missionId: string) => {
        await updateMission(missionId);
        const missions = await fetchMissions();
        setMissions(missions);
    }

  return (
    <div>
      <h3>{mission.name}</h3>
      <p>Priority: {mission.priority}</p>
      <p>Description: {mission.description}</p>
      <p>Status: {mission.status}</p>
      <button onClick={() => handleDelete(mission._id)}>Delete</button>
      {mission.status !== 'Completed' && <button onClick={() => handleUpdate(mission._id)}> Progress</button>}
      
    </div>
  )
}

export default MissionComp