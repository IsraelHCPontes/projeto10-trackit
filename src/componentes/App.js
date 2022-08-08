import GlobalStyle from "../Assets/styles/GlobalStyles"
import Habitos from "./Habitos"
import Login from "./Login"
import Hoje from "./Hoje"
import Cadastro from "./Cadastro"
import { BrowserRouter ,Routes ,Route ,useNavigate  } from "react-router-dom"
import PrivatePage from "./PrivatePage"
import UserProvider from "../contexts/UserContext"
import Historico from "./Historico"

export default function App(){
    return (
        <BrowserRouter>
          <GlobalStyle/>
            <UserProvider>
              <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/> 
                <Route path="/habitos" element={ <PrivatePage><Habitos/></PrivatePage>}/> 
                <Route path="/hoje" element={<PrivatePage><Hoje/></PrivatePage>}/>
                <Route path="/historico" element={<PrivatePage><Historico/></PrivatePage>}/>
              </Routes>
           </UserProvider>
        </BrowserRouter>
    )
}