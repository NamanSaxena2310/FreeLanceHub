import { createContext,useState } from "react";

const PromptContext = createContext()

const backendUrl = import.meta.env.VITE_BACKEND_URL
const PromptContextProvider = ({children})=>{
  const [token, setToken] = useState("")
const value = {
  token,
  setToken,
  backendUrl
}

  return(
    <PromptContext.Provider value={value}>
      {children}
    </PromptContext.Provider>
  )
}


export {PromptContext}
export default PromptContextProvider
