import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';



export default function Habitos(){

        return(
                <Wrapper>
                    <MeusHbitos>
                    <h1>Meus hábitos</h1> 
                    <button>+</button>
                    </MeusHbitos>
                    <MsgDefaut>Você não tem nenhum hábito cadastrado ainda.
                        Adicione um hábito para começar a trackear!</MsgDefaut>
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
        background: #52B6FF;
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