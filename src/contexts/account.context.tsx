import React, { useContext } from "react";
import { AccountData } from "../models/accounts";

export type AccountContextType = {
    account: AccountData | null;
    clear: () => void;
    setAccount: (payload: AccountData | null) => void;
};

export const AccountContext = React.createContext<AccountContextType | null>(null);

export const AccountProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [account, setAccount] = React.useState<AccountData | null>(null);

    const clear = () => {
        setAccount(null);
    }

    return (
        <AccountContext.Provider value={{ account, setAccount, clear }}>
            {children}
        </AccountContext.Provider>
    );
};

// Custom hook to access the context
export const useAccountContext = (): AccountContextType => {
    const context = useContext(AccountContext);
    if (!context) {
        throw new Error("useAccountContext must be used within an AccountProvider");
    }
    return context;
};