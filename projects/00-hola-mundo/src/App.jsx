import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
  return (
    <section className='App'>
        <TwitterFollowCard userName={"lefilett"} initialIsFollowing={true}>
          Felipe León Fernández
        </TwitterFollowCard>
        <TwitterFollowCard userName={"juanrallo"}>
          Juan Ramón Rallo
        </TwitterFollowCard>
        <TwitterFollowCard userName={"elonmusk"}>
          Elon Musk
        </TwitterFollowCard>
    </section>
  )
}