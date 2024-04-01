import { useState } from "react"
import { MatchInterface } from "./MatchesContext"
import Ranking from "./Ranking"
import Rounds from "./Rounds"

import matchesJSON from '../assets/matches.json'
import styles from './Championship.module.css'

export default function Championship() {
  const initialData = matchesJSON as MatchInterface[]
  const [matches, setMatches] = useState<MatchInterface[]>(initialData)

  return (
    /* A COMPLETAR: insira o provider do contexto das partidas (matchesContext), passado os dados do estado. */
   
      <h1 className={styles.header}>Brasileirão</h1>
      <div className={styles.championship}>
        <Rounds />
        <Ranking />
      </div>
  )
}