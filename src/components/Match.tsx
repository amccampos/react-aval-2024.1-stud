import { TeamId } from "./Team"

export type MatchProps = {
  teamA: TeamId
  teamB: TeamId
}

/** Componente para apresentar uma partida entre duas equipes. */
export default function Match({ teamA, teamB }: MatchProps) {
  // A COMPLETAR
  // Use o contexto das partidas (MatchesContext) para consultar e alterar os dados de uma partida.

  // busca a partida definida por teamA e teamB
  const index = matches.findIndex(match => match.teams[0] === teamA && match.teams[1] === teamB)
  const match = matches[index]
  
  const updateScore = (score: number[]) => {
    setMatches([
      ...matches.slice(0, index),
      { ...match, score },
      ...matches.slice(index + 1)
    ])
  }

  return (
    <div className="flex align-center m-3">
      { /* A COMPLETAR: use o componente Team para apresentar teamA, com a bandeira à direita */}
      
      <input type="text" className="mx-5 small t-center b-none b-bottom" maxLength={2}
        value={match?.score === undefined ? '' : match.score[0]}
        onChange={e => updateScore([parseInt(e.target.value) || 0, match?.score?.[1] || 0])}
      />
      X
      <input type="text" className="mx-5 small t-center b-none b-bottom" maxLength={2}
        value={match?.score === undefined ? '' : match.score[1]}
        onChange={e => updateScore([match?.score?.[0] || 0, parseInt(e.target.value) || 0])}
      />
      { /* A COMPLETAR: use o componente Team para apresentar teamA, com a bandeira à esquerda */}
      
    </div>
  )
}