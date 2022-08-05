import Header from "../componentes/Header"
import Footer from "./Footer"

export default function PrivatePage({children}){
    
    const auth = JSON.parse(localStorage.getItem('useData'))

   return auth ? 
   <>
   <Header/>
   {children}
   <Footer/>
   </> 
   :
   console.log('sem acesso')
   
    
} 