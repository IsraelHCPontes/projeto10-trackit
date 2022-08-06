import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import trash from "../Assets/img/Trash.svg"
import axios from 'axios';
import styled from 'styled-components';
import { getListarHabitos, postCriarHabitos } from '../services/Trackit'



export default function Habitos(){
const dias = ['D', 'S', 'T', 'Q','Q','S','S']
const [botaoClickado, setBotaoClickado] = useState(false)
const [listaHabitos, setListaHabitos] = useState([])

    useEffect(() => {
        getListarHabitos().then((res)=>
        {setListaHabitos([...res.data]);
        })},
        [])  

    function BotaoDias({dias, index, diasClickados, setDiasClickados}){
        
        
        

        const [clicked, setClicked] = useState(false)

        function DiasClickados({index}){
            let clickado = diasClickados.includes(index)
            
            if(clickado) {
                setDiasClickados(diasClickados.filter((value)=>{
                 return value !== index
             }))
            }else{
                setDiasClickados((value)=>([...value, index]))
            }
         }

        return <BotaoDia clicked={clicked} onClick={() => {setClicked(!clicked); DiasClickados({index})}}>{dias}</BotaoDia>
    }


    function DiasEscolhidos({dias, index, listaHabitos, days}){
        return <DiaEscolhidos days={days} index={index}>{dias}</DiaEscolhidos>
    }


    function BoxNewHabitos({dias, setBotaoClickado}){
        const [diasClickados, setDiasClickados] = useState([])
        const [nomeHabito, setNomeHabitos] = useState("")
            

        console.log(diasClickados)

        function handleForm(e){

            console.log(e.target.value)
            setNomeHabitos(e.target.value)
        }
        
        function sendForm(e) {

            const body ={
                name: `${nomeHabito}`,
                days: diasClickados
            }
            console.log(body)

            postCriarHabitos(body).then((res =>{setBotaoClickado(false); console.log('cadastrou', res)}))
        }
        return(
        <BoxNewHabito>
                <input onChange={handleForm} name='name'placeholder='nome do hábito' />
                <Dias>
                {dias.map((dias, index)=> <BotaoDias diasClickados={diasClickados} setDiasClickados={setDiasClickados}index={index} dias={dias}/>)}
                </Dias>
                <BottomMenu>
                    <Cancelar onClick={()=>setBotaoClickado(false)}>Cancelar</Cancelar>
                    <button onClick={sendForm}>Salvar</button>
                </BottomMenu>
        </BoxNewHabito>
        )
    }

    function Habitos({name, days}){
       
        return (
            <BoxHabitos>
                <Title>{name}</Title>
                <Dias>
                    {dias.map((dias, index)=> <DiasEscolhidos listaHabitos={listaHabitos} index={index + 1} days={days} dias={dias}/>)}
                </Dias>
                <ImgTrash src={trash}/>
            </BoxHabitos>
        )
    }

    

    
            return(
                <Wrapper>
                    <MeusHbitos>
                    <h1>Meus hábitos</h1> 
                        <button onClick={() => !botaoClickado ? setBotaoClickado(!botaoClickado): ""}>+</button>
                        </MeusHbitos>

                         {botaoClickado ? <BoxNewHabitos dias={dias}  setBotaoClickado={setBotaoClickado}/> :"" }

                         <ContainerHabitos>
                           {listaHabitos.length > 0 ? listaHabitos.map(({name, days})=>
                            <Habitos name={name} days={days}/>)
                            :
                            <MsgDefaut>Você não tem nenhum hábito cadastrado ainda.
                            Adicione um hábito para começar a trackear!</MsgDefaut>}
                         </ContainerHabitos>
              </Wrapper>
            )
}



const Wrapper = styled.div`
    margin-top: 98px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
`
const MeusHbitos = styled.div`
    width: 100%;
    padding-left:17px;
    padding-right: 17px;
    display:flex;
    justify-content: space-between;
    align-items: center;

    button {
        font-family: Lexend Deca;
        padding-bottom: 6px;
        font-size: 27px;
        font-weight: 400;
        display:flex;
        justify-content: center;
        align-items: center;
        height: 35px;
        width: 40px;
        color: #ffffff;
        background:#52B6FF ;
        border:none;
        border-radius: 4.63636px;
    }

    h1 {
        font-family: Lexend Deca;
        font-size: 23px;
        font-weight: 400;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: left;
        color: #126BA5;
        }
`

const MsgDefaut = styled.h2`
        width: 100%;
        padding-left:17px;
        padding-right: 17px;
        margin-top: 28px;
        font-family: Lexend Deca;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
        color:#666666;

`

const BoxNewHabito = styled.div`
    margin-top: 20px;
    height: 180px;
    width: 340px;
    border-radius: 5px;
    border-radius: 5px;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        margin-top:18px;
        width: 303px;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;  
        padding-left: 11px;
        font-family: Lexend Deca;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: left;
        color: #666666;


        
    }

    input::placeholder{
        font-family: Lexend Deca;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: left;
        color: #DBDBDB;

    }
`

const ContainerHabitos = styled.div``

const Dias = styled.div`
    width: 303px;
    margin-top: 8px;
`
const BotaoDia = styled.button`
        margin-right:4px;
        width: 30px;
        height: 30px;
        background:${({clicked}) => clicked ? '#CFCFCF' :'#FFFFFF' };
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: Lexend Deca;
        font-size: 20px;
        font-weight: 400;
        padding-bottom: 5px;
        text-align: center;
        color: ${({clicked}) => clicked ? '#FFFFFF' :'#DBDBDB' };
`


const BottomMenu = styled.div`
    width: 303px;
    margin-top: 29px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
   


    button{
        height: 35px;
        width: 84px;
        left: 257px;
        top: 277px;
        border-radius: 4.636363506317139px;
        border: none;
        background: #52B6FF;
        color: #ffffff;
        font-family: Lexend Deca;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: center;
    }
`

const Cancelar = styled.div`
   height: 20px;
    width: 69px;
    left: 165px;
    top: 284px;
    border-radius: nullpx;
    font-family: Lexend Deca;
    font-size: 16px;
    letter-spacing: 0em;
    text-align: center;
    color:#52B6FF;
    margin-right: 23px;
`

const BoxHabitos = styled.div`
    margin-top: 22px;
    margin-bottom: 10px;
    padding-left:15px;
    height: 91px;
    width: 340px;
   
    border-radius: 5px;
    background-color:#FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

`

const Title = styled.h1`
    font-family: Lexend Deca;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color: #666666;

`
const ImgTrash = styled.img`
    height: 18px;
    width: 18px;
    right: 12px;
    top: 12px;
    border-radius: 0px;
    position: absolute;

`
const DiaEscolhidos = styled.button`
        margin-right:4px;
        width: 30px;
        height: 30px;
        background:${({index, days}) => days.includes(index) ? '#CFCFCF' :'#FFFFFF'};
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: Lexend Deca;
        font-size: 20px;
        font-weight: 400;
        padding-bottom: 5px;
        text-align: center;
        color:${({index, days}) => days.includes(index) ? '#FFFFFF' :'#DBDBDB'}
`