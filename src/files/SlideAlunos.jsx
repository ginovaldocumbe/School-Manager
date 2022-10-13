import { RiHome2Line } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { BsPeople, BsCalendar, BsBook, BsBookmarks } from "react-icons/bs";
import { FiBook } from "react-icons/fi";

export const SlideData = [
 
        {
          path: "inicio",
          nome: "Inicio",
          icone: <RiHome2Line />,
        },
        {
          path: "professores",
          nome: "Professores",
          icone: <AiOutlineUser />,
        },
        {
          path: "estudantes",
          nome: "Estudantes",
          icone: <BsPeople />,
        },
        {
          path: "disciplinas",
          nome: "Disciplinas",
          icone: <FiBook />,
        },
        {
          path: "avaliacoes",
          nome: "Avaliacoes",
          icone: <BsCalendar />,
        },
        {
          path: "seccoes",
          nome: "Seccoes",
          icone: <BsBookmarks />,
        },
        {
          path: "turmas",
          nome: "Turmas",
          icone: <BsBook />,
        },

]