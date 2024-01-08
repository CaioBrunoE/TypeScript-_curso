import './App.css'
// 4-importação de componete
import FirstComponet from './components/FirstComponet,'

//5-props com ts  desetruturando
import SecondComponente from './components/SecondComponente'
import Desestructuring from './components/Desestructuring'
import { Category } from './components/Desestructuring'

//6 - Use state co ts 
import State from './components/State'

// 8 Contexto
import { createContext, useContext } from 'react'

//10 ultilizando contexto
import Context from './components/Context'


//8 Type
type textOrNull = string | null;
type fixed = "Isso" | "Ou " | "Aquilo"

// 9 context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {
  //1 -variaveis
  const name: string = "Caio"
  const age: number = 24
  const isWorking: boolean = true

  //2-Funçoes
  const useGreeting = (name: string): string => {
    return `Olá ${name}!`
  }

  //8 types

  const myText: textOrNull = "Tem algum texto aqui"
  let mySEcondTExt: textOrNull = null;

  //mySEcondTExt = "Opa";

  const testandoFixed: fixed = "Isso"

  //9 Context 
  const contextValue: IAppContext = {
    language: "Javascript",
    framework: "express",
    projects: 5
  };

  return (
    <AppContext.Provider value={contextValue}>
      <>
        <h1>TypeScript com react</h1>
        <h2>Nome: {name}</h2>
        <p>Idade : {age}</p>
        <p>Esta trabalhando : {isWorking && <span>Esta trablhando!</span>}</p>
        <h3>{useGreeting(name)}</h3>
        <FirstComponet />
        <SecondComponente name='Segundo' />
        <Desestructuring title='Algum titulo' content='Algum coteudo' commentsQTY={10} tags={["ts", "js"]}
          category={Category.ts}
        />
        <State />
        {myText && <p>Tem texto na variavel</p>}
        {mySEcondTExt && <p>Tem texto na variavel</p>}
        <Context />
      </>
    </AppContext.Provider>
  )
}

export default App
