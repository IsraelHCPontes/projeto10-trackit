import GlobalStyle from "../Assets/styles/GlobalStyles"
import Habitos from "./Habitos"
import Login from "./Login"
import Cadastro from "./Cadastro"
import { BrowserRouter ,Routes ,Route ,useNavigate  } from "react-router-dom"
import PrivatePage from "./PrivatePage"

export default function App(){
    return (
        <BrowserRouter>
          <GlobalStyle/>
          <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/> 
          <Route path="/habitos" element={ <PrivatePage><Habitos/></PrivatePage>}/> 
        </Routes>
        </BrowserRouter>
    )
}