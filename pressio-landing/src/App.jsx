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

    <section id="comoFunciona">
      <h1 className='titulo-esc'>- Como Funciona? -</h1>
      <p className='sub-esc'>  Unimos tecnologia de monitoramento, educação prática e engajamento para transformar a rotina do paciente e a gestão do profissional de saúde.</p>
      <div className='container'>
      <div className='box'>
        <p className="sub-cla"><strong>1. Painel Único de Dados e Estratificação</strong></p>
        <p className='texto-cla'>    Centralização dos históricos dos pacientes em uma única visualização.
  Classificação do risco cardiovascular e nível do Modelo de Atenção às Doenças Crônicas.
</p>
      </div>
      <div className='bolinhas'></div>
      </div>
      <div className='container'>
      <div className='box'>
        <p className="sub-cla"><strong>2. Desmistificação do Autocuidado na Prática</strong></p>
        <p className='texto-cla'>  Química dos Alimentos: Tradução clara de rótulos nutricionais e dados sobre sódio, açúcar e ultraprocessados.
  Cuidado Medicamentoso: Orientações sobre interações químicas, horários e adesão ao tratamento prescrito.</p>
      </div>
      <div className='bolinhas'></div>
      </div>
      <div className='container'>
      <div className='box'>
        <p className="sub-cla"><strong>3. Conexão Contínua e Dispositivos Conectados</strong></p>
        <p className='texto-cla'>  Envio automático de medições via Bluetooth (pressão arterial e glicemia).
  Alertas inteligentes para medições alteradas ou esquecimento de registros.
</p>
      </div>
      <div className='bolinhas'></div>
      </div>
    </section>

    <section id="paraQuemE">
      <h1 className='titulo-cla'>Para Quem É?</h1>
      <div className='box'>
        <img src="../public/pacientes.png" alt="" />
        <div>
          <p className='sub-cla'><strong>Pacientes</strong></p>
          <p className='texto-cla'>  Ganham autonomia, facilidade de autocuidado e controle prático da sua saúde. </p>
        </div>
      </div>
      <div className='box'>
        <div>
          <p className='sub-cla'><strong>Profissionais da Atenção Básica</strong></p>
          <p className='texto-cla'>  Acessam dados centralizados, históricos claros e otimizam o tempo de consulta.</p>
        </div>
        <img src="../public/profissionais.png" alt="" />
      </div>
      <div className='box'>
        <img src="../public/proSaude.png" alt="" />
        <div>
          <p className='sub-cla'><strong>Gestores de Saúde</strong></p>
          <p className='texto-cla'>  Acompanham indicadores de desempenho e promovem ações preventivas baseadas em dados reais.</p>
        </div>
      </div>
    </section>

    <section id='diferenciais'>
      <h1 className='titulo-cla'>Diferenciais</h1>
      <div className='container'>
  <div><p className='sub-esc'>Funcionalidade</p></div>
  <div><p className='sub-esc'>Meu Sus Minha Vida</p></div>
  <div><p className='sub-esc'>Glic</p></div>
  <div><p className='sub-esc'>Medisafe</p></div>
  <div><p className='sub-esc'>Pressio</p></div>
  <div><p className='sub-esc'>Foco em Hipertensão + Diabetes Integrados</p></div>
  <div><i class="fa-solid fa-x"></i></div>
  <div><i class="fa-solid fa-x"></i></div>
  <div><i class="fa-solid fa-x"></i></div>
  <div><i class="fa-solid fa-check"></i></div>
  <div><p className='sub-esc'>Integração com Fluxo da Atenção Básica</p></div>
  <div><i class="fa-solid fa-check"></i></div>
  <div><i class="fa-solid fa-x"></i></div>
  <div><i class="fa-solid fa-x"></i></div>
  <div><i class="fa-solid fa-check"></i></div>
  <div><p className='sub-esc'>Conexão Bluetooth <br/> (Pressão/Glicemia)</p></div>
  <div><i class="fa-solid fa-x"></i></div>
  <div><i class="fa-solid fa-x"></i></div>
  <div><i class="fa-solid fa-x"></i></div>
  <div><i class="fa-solid fa-check"></i></div>
  <div><p className='sub-esc'>Orientação Nutricional de Rótulos</p></div>
  <div><i class="fa-solid fa-x"></i></div>
  <div><i class="fa-solid fa-x"></i></div>
  <div><i class="fa-solid fa-x"></i></div>
  <div><i class="fa-solid fa-check"></i></div>
</div>
    </section>

    <footer>
      <h1 className='titulo'>Pressio</h1>
      <div>
          <p className='sub-cla'><strong>Contatos:</strong></p>
          <ul className='texto-cla' style={{fontSize: "24px"}}>
            <li><i class="fa-brands fa-instagram"></i> @pressio_saude</li>
            <li><i class="fa-regular fa-envelope"></i>pressio@gmail.com</li>
          </ul>
      </div>
      <div>
          <p className='sub-cla'><strong>Áreas:</strong></p>
          <ul className='texto-cla'  style={{fontSize: "24px"}}>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#desafio">Desafio</a></li>
            <li><a href="#comoFunciona">Como Funciona</a></li>
            <li><a href="#paraQuemE">Para Quem É?</a></li>
            <li><a href="#diferenciais">Diferenciais</a></li>
          </ul>
      </div>
    </footer>
    </>
  )
}

export default App
