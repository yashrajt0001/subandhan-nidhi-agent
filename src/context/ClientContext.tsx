import React, { createContext, useState } from "react";
import { initialDueAmountClients, initialPropertyClients } from "./fakeData";

const ClientContext = createContext<ClientsType | null>(null);

export const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  const [dueAmountClients, setDueAmountClients] = useState<DueAmountClients>(initialDueAmountClients);
  const [propertyClients, setPropertyClients] = useState<PropertyClients>(initialPropertyClients);

  return <ClientContext.Provider value={{dueAmountClients, propertyClients}}>{children}</ClientContext.Provider>;
};

export default ClientContext;