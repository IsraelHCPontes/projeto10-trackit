import { useState, } from "react"
import { Link,useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import Logo from "../Assets/img/Logo.svg"
import {Button, ButtonFacke} from '../componentes/common/Button'
import Form from "./common/Form"
import RodaPe from "./common/RodaPe"
import { postCadastro } from "../services/Trackit"
import { ThreeDots } from  'react-loader-spinner'



export default function Cadastro(){
    const [loading, setLoading] = useState(false)
    const [disabled, setDesibled] = useState(false)

    const { cadastro } = useParams()

    const navigate = useNavigate()

    const [form, setForm] = useState({
        email: '',
        name: '',
        image:'',
        password:''
    })

    function handleForm(e){
        e.preventDefault()
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

        console.log(body.image)

        

        postCadastro(body).catch(({response}) => {
        alert(response.data.message);
        setLoading(false);
        setDesibled(false)})

        postCadastro(body).then(res => {console.log('deu bom', res); navigate('/');setForm({ 
        email: '',
        name: '',
        image:'',
        password:''})})

        
    }

    return (
        <Wrapper>
            <LogoTop>
                <img src={Logo}/>
            </LogoTop>
             <Form  onSubmit={sendForm}>
               
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
                id='forpassword'
                onChange={handleForm}
                type='password'
                name='password'
                value={form.password}
                placeholder='password'
                disabled={disabled}
                required/>

                <input
                id='forName'
                onChange={handleForm}
                type='text'
                name='name'
                value={form.name}
                placeholder='nome'
                disabled={disabled}
                required/>
                
                <input
                id='fo  image'
                onChange={handleForm}
                type='url'
                name='image'
                value={form.image}
                placeholder='image'
                disabled={disabled}
                required/>

                {loading ? <ButtonFacke><ThreeDots
                 color="#FFFFFF"
                 height={13}
                 width={51}
                 marginLefit={30}
                 /></ButtonFacke> :
                <Button>Cadastrar</Button>}

             </Form>

             <Link to={`/cadastro`}>
                 <RodaPe>Já tem uma conta? Faça login!</RodaPe>
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
