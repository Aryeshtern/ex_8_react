import { useEffect, useState } from 'react'
import Mission from './types/Mission'
import { fetchMissions } from './services/data'
// import './App.css'
import Form from './components/formComp.tsx/Form'
import MissionList from './components/missionsListComp/MissionList'

function App() {

  const [missions, setMissions] = useState<Mission[]>([])

  useEffect(() => {
    const init = async ()=>
    {
        const missionsList = await fetchMissions()
        setMissions(missionsList)
    }
    init()
  }, [missions])


  
  return (
    <>
      <header >
        <h2>Militery Misssions Deshboard</h2>
      </header>
      <main>
      <Form setMissions={setMissions}/>
      <MissionList missions={missions} setMissions={setMissions}/>
      </main>
      
    </>
  )
}

export default App
