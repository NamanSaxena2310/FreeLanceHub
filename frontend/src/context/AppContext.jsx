import { createContext,useEffect,useState } from "react";

const AppContext = createContext()

const backendUrl = import.meta.env.VITE_BACKEND_URL
const AppContextProvider = ({children})=>{
  const [token, setToken] = useState("")
const value = {
  token,
  setToken,
  backendUrl
}


useEffect(()=>{
  const tokenFromLocalStorage = localStorage.getItem("token")
  if (tokenFromLocalStorage) {
    setToken(tokenFromLocalStorage)
  }
},[])

  return(
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}


export {AppContext}
export default AppContextProvider
