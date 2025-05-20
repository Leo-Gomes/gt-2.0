import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Layout } from './components/Layout/Layout'
import { Saudacao, Teste, TesteNovo } from './components/Saudacao'

function App() {

  return (
    <>
      <Header/>
      <Saudacao name="Léozin"/>
      <Teste/>
      <TesteNovo/>
      <Footer/>
    </>
  )
}

export default App
