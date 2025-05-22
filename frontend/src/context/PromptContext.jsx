import { createContext } from "react";

const PromptContext = createContext()


const PromptContextProvider = ({children})=>{
const value = {

}

  return(
    <PromptContext.Provider value={value}>
      {children}
    </PromptContext.Provider>
  )
}


export {PromptContext}
export default PromptContextProvider
