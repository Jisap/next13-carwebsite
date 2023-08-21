'use client'

import { createContext, useContext, useState } from "react" 

export const SearchContext = createContext();               // Context

export const SearchContextProvider = ({ children }) => {    // Provider
    
    const [searchActive, setSearchActive] = useState(false)
    
    return (
        <SearchContext.Provider value={{searchActive, setSearchActive}}>
            { children }
        </SearchContext.Provider>
    )
};

export const useSearchContext = () => useContext( SearchContext );  // Hook para uso del context