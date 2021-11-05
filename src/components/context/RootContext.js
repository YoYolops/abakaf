import { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router";

const RootContext = createContext({})

export function RootProvider({ children }) {
    const [ rootKey, setRootKey ] = useState("")
    const [ isLoading, setIsLoading ] = useState(true)
    const history = useHistory();

    useEffect(() => {
        const storagedKey = localStorage.getItem("abakabrtk");
        if(storagedKey) {
            setRootKey(storagedKey)
            history.push("/root");
        }
        setIsLoading(false)
    }, [ history ])

    function storeRootKey(key) {
        localStorage.setItem("abakabrtk", key)
    }

    return (
        <RootContext.Provider value={{
            rootKey,
            storeRootKey,
            isLoading,
            setRootKey
        }}>
            { children }
        </RootContext.Provider>
    )
}

export default RootContext;