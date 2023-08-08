import { useContext, createContext} from "react";
   
const HistoryContext = createContext()

//Receives the children wrapped in HistoryContext in the App.jsx and a prop
const HistoryProvider = ({children, item}) =>{
    
    return(
        <HistoryContext.Provider value={item}>
            {children}
        </HistoryContext.Provider>
    )
}

export const useHistoryListContext = () => useContext(HistoryContext)

export default HistoryProvider