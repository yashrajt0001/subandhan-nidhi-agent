import React, { createContext, useState } from "react";
import { initialDueAmountClients, initialKycClients, initialPropertyClients } from "./fakeData";

const ClientContext = createContext<ClientsType | null>(null);

export const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  const [dueAmountClients, setDueAmountClients] = useState<DueAmountClients>(initialDueAmountClients);
  const [propertyClients, setPropertyClients] = useState<PropertyClients>(initialPropertyClients);
  const [kycClients, setKycClients] = useState<KycClients>(initialKycClients);

  return <ClientContext.Provider value={{dueAmountClients, propertyClients, kycClients}}>{children}</ClientContext.Provider>;
};

export default ClientContext;