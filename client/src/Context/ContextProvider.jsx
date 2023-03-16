import { createContext, useState } from 'react';

export const LoginContext = createContext(null);

const ContextProvider = ({children}) => {

    const [ acc, setAccount ] = useState('');
    
    return (
        <LoginContext.Provider value={{ acc, setAccount }}>
            {children}
        </LoginContext.Provider>
    )
}

export default ContextProvider;