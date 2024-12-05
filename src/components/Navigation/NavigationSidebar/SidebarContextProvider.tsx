import React, { createContext, useMemo, useState } from "react";

interface ISidebarContext {
    expanded: boolean;
    setExpanded: React.Dispatch<React.SetStateAction<ISidebarContext["expanded"]>>;
    activeItemId: string | undefined;
    setActiveItemId: React.Dispatch<React.SetStateAction<ISidebarContext["activeItemId"]>>;
}

export const SidebarContext = createContext<ISidebarContext | null>(null);

const  SidebarContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [expanded, setExpanded] = useState<ISidebarContext["expanded"]>(true);
    const [activeItemId, setActiveItemId] = useState<ISidebarContext["activeItemId"]>();

    const ctx = useMemo(() => ({ expanded, setExpanded, activeItemId, setActiveItemId }), [expanded, activeItemId])
    return (
        <SidebarContext.Provider value={ctx}>
            {children}
        </SidebarContext.Provider>
    )
};

export default SidebarContextProvider;