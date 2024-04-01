import { Dispatch, SetStateAction, createContext } from "react"
import { TeamId } from "./Team"

export interface MatchInterface {
  teams: TeamId[]
  round: number
  score?: number[]
}

export type MatchContext = {
  matches: MatchInterface[]
  setMatches: Dispatch<SetStateAction<MatchInterface[]>>
}

export const matchesContext = createContext<MatchContext>({
  matches: [],
  setMatches: () => {}
})