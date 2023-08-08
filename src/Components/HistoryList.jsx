import { useHistoryListContext } from "../Providers/HistoryProvider";

const HistoryList = () =>{
    const historyList = useHistoryListContext()

    return(
        <div>
            <h1>Latest equations you calculated (Imported using Context API)</h1>
            {historyList.map((equation, index) => (
            <h2 key={index}>{equation}</h2>
            ))}
        </div>
    )
}

export default HistoryList