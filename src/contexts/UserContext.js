import { createContext, useState } from "react";

export const UserContext = createContext({});

function UserProvider({children}){
    const [imgProfile, setImgProfile] = useState('')
    console.log(imgProfile)
    return(
            <UserContext.Provider value={{imgProfile, setImgProfile}}>
                {children}
            </UserContext.Provider>
         )
}

export default UserProvider;