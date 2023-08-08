import { useHistoryListContext } from "../Providers/HistoryProvider";


const HistoryList = () =>{
    //Extract the item prop from the HistoryProvider API
    const historyList = useHistoryListContext()

    return(
        <div>
            <h1>Latest equations you calculated</h1>
            <div>
                {historyList.map((equation, index) => (
                <h2 key={index}>{equation}</h2>
                ))}
            </div>
        </div>
    )
}

export default HistoryList