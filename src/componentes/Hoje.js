import styled from 'styled-components';
import check from '../Assets/img/check.svg'
import { getBuscaHabitosHoje} from '../services/Trackit'
import { useState, useEffect } from 'react';
import dayjs from "dayjs"


export default function Hoje(){
    const [botaoClickado, setBotaoClickado] = useState(false)
    const [listaHabitos, setListaHabitos] = useState([])
    const [atualiza, setAtualiza] = useState(false)  
    const [diaSemana, setDiaSemana] = useState("")
    

    useEffect(() => {
        getBuscaHabitosHoje().then((res)=>
        {setListaHabitos([...res.data]);
        })},[])  


    useEffect(()=>{

        const diaSemana = dayjs().format('dddd')

        switch (diaSemana) {

            case 'Sunday':
                setDiaSemana("Domingo")
                break;
        
            case 'Monday':
                setDiaSemana("Segunda")
                break;

            case "Tuesday":
                setDiaSemana("Terça")
                break;   
                
            case 'Wednesday':
                setDiaSemana("Quarta")
                break;
        
            case 'Thursday':
                setDiaSemana("Quinta")
                break;

            case 'Friday':
                setDiaSemana("Sexta")
                break;  
                
            case 'Saturday':
                setDiaSemana("Sábado")
                break;     
        }

    },[])

    function HabitosHoje({name, currentSequence, highestSequence}){
        const [clicked, setClicked] = useState(false)
        return (
            <BoxHabitos>
                <Conteudo>
                    <Esquerda>
                            <h1>{name}</h1>
                            <h3>Sequência atual: {currentSequence} dias</h3> 
                            <h3>Seu recorde: {highestSequence} dias</h3>
                    </Esquerda>
                    <Direita
                    clicked={clicked}
                    setClicked={setClicked}
                    onClick={()=> setClicked(!clicked)}>
                        <img src={check}/>
                    </Direita>
                </Conteudo>
            </BoxHabitos>
        )
    }

        console.log(listaHabitos)
    return(
        <Wrapper>
            <Topo>
            <h1>{diaSemana}, {dayjs().format('DD/MM')}</h1>
            <h2>Nenhum hábito concluído ainda</h2>
            </Topo>
           <ContainerHabitos>

           {listaHabitos.map(({name,currentSequence, highestSequence})=>
           <HabitosHoje
           highestSequence={highestSequence}
           currentSequence={currentSequence}
           name={name} />)}

           </ContainerHabitos>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    margin-top:98px;
    margin-left: 17px;
`

const Topo = styled.div`
   h1{
    font-family: Lexend Deca;
    font-size: 23px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    color:#126BA5;
    }

    h2{
        font-family: Lexend Deca;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
        color: #BABABA;
    }
`

const ContainerHabitos = styled.div`
    margin-top: 28px;
`

const BoxHabitos = styled.h1`
    margin-bottom:10px;
    height: 94px;
    width: 340px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:#FFFFFF;
`
const Conteudo = styled.div`
    width: 312px;
    height: 69px;
    display: flex;
    justify-content: space-between;
    
`
const Esquerda = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1{
        font-family: Lexend Deca;
        font-size: 20px;
        font-weight: 400;
        text-align: left;
        color:#666666;
        margin-bottom:7px;
    }

    h3{
        font-family: Lexend Deca;
        font-size: 13px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: left;
        color:#666666;

    }
`

const Direita = styled.div`
    height: 69px;
    width: 69px;
    left: 276px;
    top: 190px;
    border-radius: 5px;
    background-color:${({clicked})=>clicked ? '#8FC549' : '#EBEBEB'};
    display: flex;
    justify-content: center;
    align-items: center;

`