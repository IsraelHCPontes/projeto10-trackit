import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {UserContext} from '../contexts/UserContext';

import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
 
  
 

export default function BotaoHj(){

    let navigate = useNavigate()
    const {quantHabitosHJ,
          habitosHjCheck,
          } = useContext(UserContext)

        console.log(quantHabitosHJ, habitosHjCheck)
    let percentage =habitosHjCheck;
    return(
        <div onClick={()=>navigate('/hoje')} style={{ width: 91, height: 91, marginBottom:36, fontFamily:'Lexend Deca'}}>
            <CircularProgressbar
            value={percentage}
            maxValue={quantHabitosHJ}
            text='Hoje'
            background
            backgroundPadding={6}
            styles={buildStyles({
                backgroundColor: "#3e98c7",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent"
            })}
            />
        </div>
    )
}

