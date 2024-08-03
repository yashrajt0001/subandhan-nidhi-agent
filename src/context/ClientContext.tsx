import React, { createContext, useState } from "react";
import { initialDueAmountClients, initialKycClients, initialOverdueClients, initialPropertyClients } from "./fakeData";

const ClientContext = createContext<ClientsType | null>(null);

export const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  const [dueAmountClients, setDueAmountClients] = useState<DueAmountClients>(initialDueAmountClients);
  const [propertyClients, setPropertyClients] = useState<PropertyClients>(initialPropertyClients);
  const [kycClients, setKycClients] = useState<KycClients>(initialKycClients);
  const [overdueClients, setoverdueClients] = useState<OverdueClients>(initialOverdueClients)

  return <ClientContext.Provider value={{dueAmountClients, propertyClients, kycClients, overdueClients}}>{children}</ClientContext.Provider>;
};

export default ClientContext;