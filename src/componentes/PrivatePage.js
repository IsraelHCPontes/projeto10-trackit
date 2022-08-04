
export default function PrivatePage({children}){
    const auth = JSON.parse(localStorage.getItem)
    console.log('tamo no privado')
    return <>{children}</>
}