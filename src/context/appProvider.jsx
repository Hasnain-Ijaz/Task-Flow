import React, { createContext, useContext, useState } from "react";

const AppStateContext = createContext();

export const useAppState = () => {
    return useContext(AppStateContext);
};

export const AppStateProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("all"); // all, pending, completed

    const value = {
        todos,
        setTodos,
        filter,
        setFilter
    };

    return (
        <AppStateContext.Provider value={value}>
            {children}
        </AppStateContext.Provider>
    );
};