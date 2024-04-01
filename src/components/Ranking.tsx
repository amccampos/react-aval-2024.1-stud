import { useContext } from "react"
import { matchesContext } from "./MatchesContext"
import teams from '../assets/teams.json'
import Team, { TeamId } from "./Team"

/** Interface com os dados da tabela de classficiação  */
interface TeamsTable {
  pt: number // pontos ganhos
  jg: number // jogos realizados
  vi: number // número de vitórias
  em: number // número de empates
  de: number // número de derrotas
  gp: number // gols a favor
  gc: number // gols contra
  sg: number // saldo de gols
}

/** função utiitária para ajustar os dados da tabela da equipe vencedora */
function win(team: TeamsTable, gp: number, gc: number) {
  team.pt += 3
  team.jg++
  team.vi++
  team.gp += gp
  team.gc += gc
  team.sg = team.gp - team.gc
}

/** função utiitária para ajustar os dados da tabela da equipe perdedora */
function lose (team: TeamsTable, gp: number, gc: number) {
  team.jg++
  team.de++
  team.gp += gp
  team.gc += gc
  team.sg = team.gp - team.gc
}

/** função utiitária para ajustar os dados da tabela da equipe que empata */
function draw (team: TeamsTable, goals: number) {
  team.pt++
  team.jg++
  team.em++
  team.gp += goals
  team.gc += goals
}

/** Componente com a tabela de classificação */
export default function Ranking() {
  const { matches } = useContext(matchesContext)
  
  // transforma o objeto com as equipes em um dicionário com valores iniciais para cada equipe.
  const dic = new Map<TeamId,TeamsTable>()
  teams.forEach(team => dic.set(team.id as TeamId, {
    pt: 0,
    jg: 0, 
    vi: 0,
    em: 0,
    de: 0,
    gp: 0,
    gc: 0,
    sg: 0
  }))

  // atualiza o dicionário com os dados dos jogos
  matches.forEach(match => {
    if (match.score) {
      const teamA = dic.get(match.teams[0])
      const teamB = dic.get(match.teams[1])
      if (teamA && teamB) {
        if (match.score[0] === match.score[1]) {
          draw(teamA, match.score[0])
          draw(teamB, match.score[0])
        }
        else {
          if (match.score[0] > match.score[1]) {
            win(teamA, match.score[0], match.score[1])
            lose(teamB, match.score[1], match.score[0])
          }
          else {
            win(teamB, match.score[1], match.score[0])
            lose(teamA, match.score[0], match.score[1])
          }
        }
      }
    }
  })

  // classifica as equipes em função dos critérios de desempate
  const sorted = [...dic].sort((a, b) => {
    const teamA = a[1]
    const teamB = b[1]
    
    // primeiro, pela pontuação
    if (teamA.pt !== teamB.pt) {
      return teamB.pt - teamA.pt
    }

    // segundo, pelo saldo de gols
    if (teamA.sg !== teamB.sg) {
      return teamB.sg - teamA.sg
    }

    // terceiro, pelo número de gols a favor
    if (teamA.gp !== teamB.gp) {
      return teamB.gp - teamA.gp
    }

    // quarto, pelo confronto direto
    const match = matches.find(m => m.teams[0] === a[0] && m.teams[1] === b[0])
    if (match && match.score && match.score[0] !== match.score[1]) {
      return match.score[1] - match.score[0]
    }

    // por fim (deixando de lado os critérios de cartão), de forma aleatória
    return Math.random() - 0.5
  })

  // transforma as equipes (já ordenadas) em nós do React
  const elms = sorted.map(([id, team], index) => (
    <tr style={{ textAlign: 'right' }} key={id}>
      <td>{index + 1}</td>
      <td><Team id={id} flag="left" /></td>
      <td>{team.pt}</td>
      <td>{team.jg}</td>
      <td>{team.vi}</td>
      <td>{team.em}</td>
      <td>{team.de}</td>
      <td>{team.gp}</td>
      <td>{team.gc}</td>
      <td>{team.sg}</td>
    </tr>
  ))

  return  (
    <div>
      <h2>Classificação</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Equipe</th>
            <th>Pt</th>
            <th>Jg</th>
            <th>Vi</th>
            <th>Em</th>
            <th>De</th>
            <th>Gp</th>
            <th>Gc</th>
            <th>Sg</th>
          </tr>
        </thead>
        <tbody>
          { elms }  
        </tbody>
      </table>
    </div>
  )
}