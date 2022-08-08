import styled from 'styled-components';
import check from '../Assets/img/check.svg'
import { getBuscaHabitosHoje, postCheckHabitos, postUncheckHabitos} from '../services/Trackit'
import { useState, useEffect, useContext } from 'react';
import dayjs from "dayjs"
import {UserContext} from '../contexts/UserContext';


export default function Hoje(){
    
    const [listaHabitos, setListaHabitos] = useState([])
    const [atualiza, setAtualiza] = useState(false)  
    const [diaSemana, setDiaSemana] = useState("")
    
    
    const {quantHabitosHJ,
          habitosHjCheck,
          setQuantHabitosHJ,
          setHabitosHjCheck
          } = useContext(UserContext)

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

    
    
    setQuantHabitosHJ(listaHabitos.length)

    setHabitosHjCheck((listaHabitos.filter(({done}) => done)).length)

    const percentage = ((listaHabitos.filter(({done}) => done).length / listaHabitos.length) * 100).toFixed(0)

        
    return(
        <Wrapper>
            <Topo>
            <h1>{diaSemana}, {dayjs().format('DD/MM')}</h1>
            {habitosHjCheck > 0 ?
            <TitlePercentage habitosHjCheck={habitosHjCheck}>{percentage}% dos hábitos concluídos</TitlePercentage>
            :
            <TitlePercentage habitosHjCheck={habitosHjCheck}>Nenhum hábito concluído ainda</TitlePercentage>}
            </Topo>
           <ContainerHabitos>

           {listaHabitos.map(({
            name,currentSequence, highestSequence, id, done, atualiza, setAtualiza})=>
           <HabitosHoje
           highestSequence={highestSequence}
           currentSequence={currentSequence}
           name={name} 
           id={id}
           done={done}
           atualiza={atualiza}
           setAtualiza={setAtualiza}
           />)}

           </ContainerHabitos>
        </Wrapper>
    )
}

function HabitosHoje({
    name,
    currentSequence,
    highestSequence,
    id,
    done,
    atualiza,
    setAtualiza}){

    const [clicked, setClicked] = useState(false)
    console.log(done)

      
    function sendCheck({id, done}) {
        if (done === false) {
            postCheckHabitos({id}).then((res => {console.log('CHECKOU') ;setAtualiza(!atualiza)}))
            postCheckHabitos({id}).catch((res) => {console.log('naoCHECKOU')})
        }

        if (done === true) {
            postUncheckHabitos({id}).then((res => {console.log('UNCHECKOU') ;setAtualiza(!atualiza) }))
            postUncheckHabitos({id}).catch((res) => {console.log('naoUNCHECKOU')})
        }
    }

    
    return (
        <BoxHabitos>
            <Conteudo>
                <Esquerda>
                        <h1>{name}</h1>
                        <Sequencia currentSequence={currentSequence} highestSequence={highestSequence}>Sequência atual: <span>{currentSequence} dias</span></Sequencia> 
                        <Recorde currentSequence={currentSequence} highestSequence={highestSequence}>Seu recorde: <span>{highestSequence} dias</span></Recorde>
                </Esquerda>
                <Direita
                clicked={clicked}
                setClicked={setClicked}
                done={done}
                onClick={()=> {sendCheck({id, done})}}>
                    <img src={check}/>
                </Direita>
            </Conteudo>
        </BoxHabitos>
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

`
const TitlePercentage = styled.h2`
        font-family: Lexend Deca;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
        color: ${({habitosHjCheck }) => habitosHjCheck > 0 ? '#8FC549':'#BABABA'};
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
`
const Sequencia = styled.h3`
        font-family: Lexend Deca;
        font-size: 13px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: left;
        color:#666666;
        span{
          color: ${({currentSequence, highestSequence}) =>
         currentSequence == highestSequence 
         ?
        '#8FC549': '#666666'}
        }
`

const Recorde = styled.h3`
         font-family: Lexend Deca;
        font-size: 13px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: left;
        color:#666666;
        span{
            color:${({currentSequence, highestSequence}) => 
            currentSequence == highestSequence 
            ?
            '#8FC549':
             '#666666'} 
        }
`

const Direita = styled.div`
    height: 69px;
    width: 69px;
    left: 276px;
    top: 190px;
    border-radius: 5px;
    background-color:${({done})=> done ? '#8FC549' : '#EBEBEB'};
    display: flex;
    justify-content: center;
    align-items: center;

`