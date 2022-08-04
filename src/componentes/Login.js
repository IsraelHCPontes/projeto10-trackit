import { Link, useParams, useNavigate } from "react-router-dom"
import { useState } from "react"
import styled from "styled-components"
import Logo from "../Assets/img/Logo.svg"
import Button from '../componentes/common/Button'
import Form from "./common/Form"
import RodaPe from "./common/RodaPe"
import { postLogin } from "../services/Trackit"


export default function Login(){

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

        postLogin(body).then(res => {console.log('deu bom', res); navigate('/habitos');setForm({ 
        email: '',
        password:''})})

        postLogin(body).catch(res => console.log('deu ruim', res, body))
    }

    return (
        <Wrapper>
            <LogoTop>
                <img src={Logo}/>
            </LogoTop>
             <Form>
               
                <input
                id='forEmail'
                onChange={handleForm}
                type='email'
                name='email'
                value={form.email}
                placeholder='email'
                required/>
                
                <input
                id='forSenha'
                onChange={handleForm}
                type='password'
                name='password'
                value={form.senha}
                placeholder='senha'
                required/>

                <Button onClick={sendForm}>Entrar</Button>

             </Form>

             <Link to={`/cadastro`}>
                 <RodaPe>Não tem uma conta? Cadastre-se!</RodaPe>
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
