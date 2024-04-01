import teams from '../assets/teams.json'

/** Tipos com os possíveis identificadores das equipes. */
export type TeamId = 'cap' | 'acg' | 'cam' | 'bah' | 'bot' | 'rbb' | 'cor' | 'cri' | 'cru' | 'cui' | 'fla' | 'flu' | 'for' | 'gre' | 'int' | 'juv' | 'pal' | 'sao' | 'vas' | 'vit'

/** Propriedades que o componente Team pode receber. */
export type TeamProps = {  
  id: TeamId // identificador da equipe
  flag?: 'left' | 'right' // indicador se a bandeira deve ser apresentada à direita ou à esquerda
}

/** Componente para apresentar uma equipe. */
export default function Team({ id, flag }: TeamProps) {
  const team = teams.find(t => t.id === id)
  const flagSrc = `/flags/${ team?.flag }`
  const flagElm = <img src={flagSrc} width={20} height={20} className="mx-5" />
  return (
    <div className="flex align-center w-fixed" style={{ flexDirection: flag === 'left' ? 'row' : 'row-reverse'}}>
      { flag && flagElm }
      <span>{ team?.name }</span>
    </div>
  )
}