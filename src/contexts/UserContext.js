import { createContext, useState } from "react";

export const UserContext = createContext({});

function UserProvider({children}){
    const [imgProfile, setImgProfile] = useState('')
    const [quantHabitosHJ, setQuantHabitosHJ] = useState(100)
    const [habitosHjCheck, setHabitosHjCheck] = useState(20)
    console.log(imgProfile)
    return(
            <UserContext.Provider value={{
             imgProfile,
             setImgProfile,
             quantHabitosHJ,
             setQuantHabitosHJ,
             habitosHjCheck,
             setHabitosHjCheck}}>
                {children}
            </UserContext.Provider>
         )
}

export default UserProvider;