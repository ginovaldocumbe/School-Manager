import { RiHome2Line,RiUserSettingsLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { BsPeople, BsCalendar, BsBook, BsBookmarks } from "react-icons/bs";
import { FiBook,FiSettings } from "react-icons/fi";

export const SlideDataAdmin = [
 
        {
          path: "/Admin/Inicio",
          nome: "Inicio",
          icone: <RiHome2Line />,
        },
        {
          path: "/Admin/escola",
          nome: "Escola",
          icone: <BsPeople />,
        },
        {
          path: "/Admin/definicoes",
          nome: "Definicoes",
          icone: <FiSettings />,
        },
        {
          path: "/Admin/perfil",
          nome: "Perfil",
          icone: <RiUserSettingsLine />,
        },
       

]