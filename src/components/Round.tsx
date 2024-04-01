import matches from '../assets/matches.json'
import Match from './Match'
import { TeamId } from './Team'

/** Componente para apresentar as partidas de uma rodada. */

// A COMPLETAR
// Defina que o componente recebe apenas uma propriedade chamada `num` do tipo `number`.
export default function Round() {

  const roundMatches = matches.filter(match => match.round === num)
  const elms = roundMatches.map(match => {
    const [teamA, teamB] = match.teams as TeamId[]
    return <Match teamA={teamA} teamB={teamB} key={`${teamA}_${teamB}`} />
  })
  return (
    <div className="flex col align-center">
      { elms }
    </div>
  )
}