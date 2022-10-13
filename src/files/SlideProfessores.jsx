import { RiHome2Fill } from "react-icons/ri";
import { BsFillPeopleFill, BsFillCalendarFill,BsFillCalendar2CheckFill} from "react-icons/bs";
import { HiDocumentText } from "react-icons/hi";
import { FaUserEdit } from "react-icons/fa";
import { IoTime } from "react-icons/io5";

export const Professores = [
 
        {
          path: "/Professores/inicio",
          nome: "Inicio",
          icone: <RiHome2Fill />,
        },
        {
          path: "/Professores/notas",
          nome: "Notas",
          icone: <HiDocumentText />,
        },
        {
          path: "turmas",
          nome: "Turmas",
          icone: <BsFillPeopleFill />,
        },
        {
          path: "horario",
          nome: "Horario",
          icone: <BsFillCalendarFill />,
        },
        {
          path: "/Professores/presenca",
          nome: "Presencas",
          icone: <FaUserEdit />,
        },
        {
          path: "avaliacoes",
          nome: "Avaliacoes",
          icone: <IoTime />,
        },
        {
          path: "planificacoes",
          nome: "Planificacoes",
          icone: <BsFillCalendar2CheckFill />,
        },

]