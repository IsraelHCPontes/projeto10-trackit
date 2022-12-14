import { Link, useParams, useNavigate } from "react-router-dom"
import { useState } from "react"
import styled from "styled-components"
import Logo from "../Assets/img/Logo.svg"
import {Button, ButtonFacke} from '../componentes/common/Button'
import Form from "./common/Form"
import RodaPe from "./common/RodaPe"
import { postLogin } from "../services/Trackit"
import { useContext } from "react"
import {UserContext} from '../contexts/UserContext';
import { ThreeDots } from  'react-loader-spinner'


export default function Login(){
    const [loading, setLoading] = useState(false)
    const [disabled, setDesibled] = useState(false)
    const {imgProfile, setImgProfile} = useContext(UserContext)

    const navigate = useNavigate()

    const [form, setForm] = useState({
        email:'',
        password:''
    })

    function handleForm(e){
        
        console.log(e.target.name, e.target.value )
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function sendForm(e) {

        e.preventDefault()
        const body ={
            ...form
        }
        
        setLoading(true)
        setDesibled(true)

        postLogin(body).then(res => 
        {console.log('deu bom', res);
        setForm({ 
        email: '',
        password:''})
        
        const stringImg = JSON.stringify(res.data.image)  
        localStorage.setItem('useImg', stringImg)
        
        
        
        const stringData = JSON.stringify(res.data)  
        localStorage.setItem('useData', stringData) 
        navigate('/hoje'); 
    })

        postLogin(body).catch(({response}) => 
        {alert(response.data.message);
         setLoading(false);
         setDesibled(false)})
    }

    return (
        <Wrapper>
            <LogoTop>
                <img src={Logo}/>
            </LogoTop>
             <Form onSubmit={sendForm}>
               
                <input
                id='forEmail'
                onChange={handleForm}
                type='email'
                name='email'
                value={form.email}
                placeholder='email'
                disabled={disabled}
                required/>
                
                <input
                id='forSenha'
                onChange={handleForm}
                type='password'
                name='password'
                value={form.senha}
                placeholder='senha'
                disabled={disabled}
                required/>

                {loading ? <ButtonFacke><ThreeDots
                 color="#FFFFFF"
                 height={13}
                 width={51}
                 marginLefit={30}
                 /></ButtonFacke> : <Button type='submit'>Entrar</Button>}

             </Form>

             <Link to={`/cadastro`}>
                 <RodaPe>N??o tem uma conta? Cadastre-se!</RodaPe>
             </Link>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
 `

const LogoTop = styled.div`
    margin-top: 120px;
    height: 178.38323974609375px;
    width: 180px;
    left: 97px;
    top: 68px;
    border-radius: 0px;

    img{
        width: 100%;
        height: 100%
    }
`

