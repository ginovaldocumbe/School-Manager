import React from 'react';
import styles from './admin.module.css';
import Inicio from "../Inicio/Inicio";
import Professores from "../Professores/Professores";
import Estudantes from "../Estudantes/Estudantes";
import Disciplinas from "../Disciplinas/Disciplinas";
import Avaliacoes from "../Avaliacoes/Avaliacoes";
import Seccoes from "../Seccoes/Seccoes";
import Turmas from "../Turmas/Turmas";
import SlideBar from "../../../components/AdminComp/SlideBar/SlideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Admin = () => (
  <>
    <Router>
      <SlideBar>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/professores" element={<Professores />} />
          <Route path="/estudantes" element={<Estudantes />} />
          <Route path="/disciplinas" element={<Disciplinas />} />
          <Route path="/avaliacoes" element={<Avaliacoes />} />
          <Route path="/seccoes" element={<Seccoes />} />
          <Route path="/turmas" element={<Turmas />} />
          <Route path="*" element={<>Nao encontrado</>} />
        </Routes>
      </SlideBar>
    </Router>
  </>
);

export default Admin;
