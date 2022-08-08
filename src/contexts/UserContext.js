import { createContext, useState } from "react";

export const UserContext = createContext({});

function UserProvider({children}){
    
    const [quantHabitosHJ, setQuantHabitosHJ] = useState(0)
    const [habitosHjCheck, setHabitosHjCheck] = useState(0)

    const imgProfile= JSON.parse(localStorage.getItem('useImg'))

    console.log(imgProfile)
    return(
            <UserContext.Provider value={{
             imgProfile,
             quantHabitosHJ,
             setQuantHabitosHJ,
             habitosHjCheck,
             setHabitosHjCheck}}>
                {children}
            </UserContext.Provider>
         )
}

export default UserProvider;