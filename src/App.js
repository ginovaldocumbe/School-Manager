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
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>

        <Routes>
          <Route path="/" element={<Login />} />
          {/* <SlideBar> */}
          <Route path="/admin" element={<SlideBar />} >
            <Route path="inicio" element={<Inicio />} />
            <Route path="professores" element={<Professores />} />
            <Route path="estudantes" element={<Estudantes />} />
            <Route path="disciplinas" element={<Disciplinas />} />
            <Route path="avaliacoes" element={<Avaliacoes />} />
            <Route path="seccoes" element={<Seccoes />} />
            <Route path="turmas" element={<Turmas />} />
          </Route>

          <Route path="*" element={<>Nao encontrado</>} />
          {/* </SlideBar> */}
        </Routes>

      </Router>
    </>
  );
}

export default App;
