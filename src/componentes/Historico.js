import styled from "styled-components"
import { useNavigate } from "react-router-dom";
export default function Historico(){
    let navigate = useNavigate()
    return(
        
            <ContainerHistorico>
                <h1>Histórico</h1>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </ContainerHistorico>
    
    )
}

const ContainerHistorico = styled.div`
    background: #F2F2F2;
    margin: 0 auto;
    margin-top:98px;
    max-width: 375px;
    width: 100%;
    min-height: 84vh;
    height: 100%;
    padding: 0 17px;
    overflow: scroll;
    h1 {
        margin-top: 28px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    p {
        width: 338px;
        margin-top: 17px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }
 `