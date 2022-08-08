
import { useState} from 'react';
import styled from 'styled-components';
import { postCriarHabitos } from '../services/Trackit'


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


export default function BoxNewHabitos({dias, setBotaoClickado, atualiza, setAtualiza}){
    const [diasClickados, setDiasClickados] = useState([])
    const [nomeHabito, setNomeHabitos] = useState("")
    const [loading, setLoading] = useState(false)
    const [disabled, setDesibled] = useState(false)
        

    console.log(diasClickados)

    function handleForm(e){
        console.log(e.target.value)
        setNomeHabitos(e.target.value)
    }
    
    function sendForm(e) {
        setLoading(true)
        setDesibled(true)
       
        const body ={
            name: `${nomeHabito}`,
            days: diasClickados
        }
        console.log(body)

        postCriarHabitos(body).then((res =>{
        setBotaoClickado(false);
        setAtualiza(!atualiza);
        console.log('cadastrou', res);
        setLoading(false)
        setDesibled(false)}))
    }
    return(
    <BoxNewHabito>
            <input onChange={handleForm}
            name='name'
            disabled={disabled}
            placeholder='nome do hábito' />

            <Dias>
            {dias.map((dias, index)=>
             <BotaoDias
             diasClickados={diasClickados}
             setDiasClickados={setDiasClickados}
             index={index}
             dias={dias}/>)}
            </Dias>

            <BottomMenu>
                <Cancelar onClick={()=>setBotaoClickado(false)}>Cancelar</Cancelar>
                <button onClick={sendForm}>Salvar</button>
            </BottomMenu>
    </BoxNewHabito>
    )
}




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


