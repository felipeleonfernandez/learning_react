import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
  return (
    <section className='App'>
        <TwitterFollowCard name={"Felipe León Fernández"} userName={"lefilett"} />
        <TwitterFollowCard name={"Juan Ramón Rallo"} userName={"juanrallo"} />
        <TwitterFollowCard name={"Elon Musk"} userName={"elonmusk"} />
    </section>
  )
}