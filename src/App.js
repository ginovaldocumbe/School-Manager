import Admin from './pages/AdminPages/admin/admin';
import Login from './pages/Login/Login';
import Topo from './components/AdminComp/topo/topo';
import Cards from './components/AdminComp/cards_estatistica/cards_estatistica';
import Inicio from "./pages/AdminPages/Inicio/Inicio";
import Professores from "./pages/AdminPages/Professores/Professores";
import Estudantes from "./pages/AdminPages/Estudantes/Estudantes";
import Disciplinas from "./pages/AdminPages/Disciplinas/Disciplinas";
import Avaliacoes from "./pages/AdminPages/Avaliacoes/Avaliacoes";
import Seccoes from "./pages/AdminPages/Seccoes/Seccoes";
import Turmas from "./pages/AdminPages/Turmas/Turmas";
import SlideBar from "./components/AdminComp/SlideBar/SlideBar";
import Profess from './pages/P_Professores/inicio/inicio'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Begin from './components/P_Professores/nav/nav'
import Notas from './pages/P_Professores/notas/notas'
function App() {
  return (
    <>
      <Router>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/Professores' element={<Begin />} >
            <Route path='inicio' element={<Profess />} />
            <Route path='notas' element={<Notas />} />
            {/*  <Route path='turmas' element={}/>
            <Route path='horario' element={}/>
            <Route path='presenca' element={}/>
            <Route path='avaliacoes' element={}/>
            <Route path='planificacoes' element={}/> */}
          </Route>
          <Route path="/admin" element={<SlideBar />} >
            <Route path="inicio" element={<Inicio />} />
            <Route path="professores" element={<Professores />} />
            <Route path="estudantes" element={<Estudantes />} />
            <Route path="disciplinas" element={<Disciplinas />} />
            <Route path="avaliacoes" element={<Avaliacoes />} />
            <Route path="seccoes" element={<Seccoes />} />
            <Route path="turmas" element={<Turmas />} />
          </Route>
          {/* <Route path="/OfProfessores" element={<Profess />} /> */}
          <Route path="*" element={<>Nao encontrado</>} />
          {/* </SlideBar> */}
        </Routes>

      </Router>
    </>
  );
}

export default App;
