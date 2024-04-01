
/** Componente gerenciador das rodadas apresentadas ao usuário. */
export default function Rounds() {
  // A COMPLETAR
  // Crie um estado com a informação da rodada a ser apresentada.
  // O estado deve ter o valor inicial de 1

  // A COMPLETAR
  // Crie uma função para incrementar o estado (`inc()`) e outra para decrementar (`dec()`),
  // gerenciando de forma que seu valor não seja menor que 1 nem maior que 2.

  // A COMPLETAR
  // Altere os botões abaixo para chamar as funções de incremento e decremento do estado
  // quando o usuário clicar nos respectivos botões.
  return (
    <div>
      <h2 className="flex justify-center">
        <button className="mx-10 bg-none b-none pointer"> &lt; </button>
        Rodada { /* A COMPLETAR: apresente o estado */ }
        <button className="mx-10 bg-none b-none pointer"> &gt; </button>
      </h2>
      { /* A COMPLETAR: use o componente Round passando o estado para indicar que rodada será apresentada */ }
      
    </div>
  )
}