import styled from "styled-components"

export default function Footer(){
   return(
   <Wrapper>
        <Habitos>Hábitos</Habitos> 
        <Percentagem></Percentagem>
        <Historico>Histórico</Historico>
    </Wrapper>
   )
}




const Wrapper = styled.div`
    height: 70px;
    width: 375px;
    left: 0px;
    bottom: 0px;
    border-radius: 0px;
    background: #FFFFFF;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    z-index: 2;
    `
const Habitos = styled.h2`
    font-family: Lexend Deca;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    color: #52B6FF;
    text-align: center;
`    
const Historico = styled.h2`
    font-family: Lexend Deca;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    color: #52B6FF;
    text-align: center;
`

const Percentagem = styled.div`
`