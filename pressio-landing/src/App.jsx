import { useState, Link } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className='introBox'>
        {/* <div id="menuHamburguer">
          <input type="checkBox" />
          <div className='hamburguer'>
            <div className="linha"></div>
            <div className="linha"></div>
            <div className="linha"></div>
          </div>
        </div>

        <div className="menu">
          <Link to="#desafio">Desafio</Link>
          <Link to="#desafio">Como Funciona</Link>
          <Link to="#desafio">Para Quem É?</Link>
          <Link to="#desafio">Diferenciais</Link>
          <Link to="#desafio">Contatos</Link>
        </div> */}

        <header id='inicio'>
          <h1 className='titulo'>Pressio</h1>
          <p className='sub'>Transformando o Cuidado das Doenças Crônicas em Recife</p>
        </header>

        <section id='desafio'>
          <div>
          <h1 className='titulo-cla'>Desafio</h1>
          <p className='texto-cla'>Apenas 30% das pessoas com hipertensão e 21% com diabetes cadastradas na Estratégia de Saúde da Família possuem o acompanhamento ideal. Precisamos mudar essa realidade.</p>
          </div>
          <div className='desafioBox'>
            <p className="sub-cla" style={{fontSize:"30px"}}><strong>+200mil</strong></p>
            <p className="texto-cla">Pessoas com hipertensão em recife</p>
            <p className="sub-cla" style={{fontSize:"30px"}}><strong>+90mil</strong></p>
            <p className="texto-cla">Pessoas com diabetes no município</p>
          </div>

          <p className="sub-cla adendo"><strong>Falta de Integração:</strong>Dados dispersos que dificultam o acompanhamento das equipes de saúde.</p>
        </section>
    </div>
    </>
  )
}

export default App
