import { useContext, createContext} from "react";
   
const HistoryContext = createContext()

const HistoryProvider = ({children, item}) =>{
    
    return(
        <HistoryContext.Provider value={item}>
            {children}
        </HistoryContext.Provider>
    )
}

export const useHistoryListContext = () => useContext(HistoryContext)

export default HistoryProvider