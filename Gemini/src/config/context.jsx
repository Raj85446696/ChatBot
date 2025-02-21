import { createContext, useState } from "react";
import run from "./gemini.js";

export const Context = createContext(); 

const ContextProvider = (props) => {
    
    const[input,setInput] = useState("");
    const[recentPrompt,setRecentprompt] = useState("");
    const[prevPrompt,setPrevPrompt] = useState("");
    const[showResult,setShowResult] = useState(false);
    const[loading,setLoading] = useState(false);
    const[resultData,setResultData] = useState("");
    
    const onSent = async(prompt)=>{
        setResultData("");
        setLoading(true);
        setShowResult(true);
        setRecentprompt(input);
        const response = await run(input);
        setResultData(response)
        setLoading(false);
        setInput(" ");
    }

    const contextValue = { 
        prevPrompt,
        setPrevPrompt, 
        onSent, 
        setResultData,
        recentPrompt, 
        showResult,
        loading, 
        resultData, 
        input , 
        setInput,  

     };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;

