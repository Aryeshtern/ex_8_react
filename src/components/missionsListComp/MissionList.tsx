import {FC} from 'react'
import Mission from '../../types/Mission'
import MissionComp from '../missionComp/MissionComp'

interface Props {
    missions: Mission[]
    setMissions: (missions: Mission[]) => void;  
}

const MissionList: FC<Props> = ({missions, setMissions}) => {
  return (
    <div>
      {missions.map((mission) => (
        <MissionComp key={mission._id} mission={mission} setMissions={setMissions}/>
      ))}
    </div>
  )
}

export default MissionList