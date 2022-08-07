import trash from "../Assets/img/Trash.svg"
import styled from 'styled-components';
import { getDeleteHabitos} from '../services/Trackit'


  export default function ListaHabitos({name, days, listaHabitos, id, atualiza, setAtualiza}){


    const dias = ['D', 'S', 'T', 'Q','Q','S','S']



        function DiasEscolhidos({dias, index,  days,id}){
            return <DiaEscolhidos days={days} index={index}>{dias}</DiaEscolhidos>
        }

         
        function sendForm(e) {
            
            console.log('deu bom', days)

            if(window.confirm(`Você realmente quer Deletar ${name}?`)){ 
            getDeleteHabitos({id}).catch((res) => {alert(res.data.message)})
            getDeleteHabitos({id}).then((res => {console.log('deu bom', days);setAtualiza(!atualiza) }))
            }

        }

     
        return (
            <BoxHabitos>
                <Title>{name}</Title>
                <Dias>
                    {dias.map((dias, index)=> <DiasEscolhidos listaHabitos={listaHabitos} index={index} days={days} dias={dias}/>)}
                </Dias>
                <ImgTrash onClick={sendForm} src={trash}/>
            </BoxHabitos>
        ) 
    }


    const Dias = styled.div`
    width: 303px;
    margin-top: 8px;
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