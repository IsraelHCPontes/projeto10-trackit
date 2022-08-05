import styled from "styled-components"
import LogoText from "../Assets/img/TrackItFonte.svg"

import { useState, useEffect, useContext  } from 'react';
import {UserContext} from '../contexts/UserContext';

export default function Header(){

    const {imgProfile, setImgProfile} = useContext(UserContext)

    

    return(
            <Wrapper>
                <Trackit src={LogoText}/>
                <img src={imgProfile}/>
            </Wrapper>
    )
}


const Wrapper = styled.div`
    height: 70px;
    width: 375px;
    left: 0px;
    top: 0px;
    border-radius: 0px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 2;

    img:nth-child(2){
        margin-right: 18px;
        height: 51px;
        width: 51px;
        left: 306px;
        top: 9px;
        border-radius: 98.5px;

    }

    
`

const Trackit = styled.img`
    height: 49px;
    width: 97px;
    margin-left: 18px;
`