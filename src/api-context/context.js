import {createContext} from "react";

const context = createContext({});

export const {Provider: ContextProvider,Consumer:ContextConsumer} = context;

export default context