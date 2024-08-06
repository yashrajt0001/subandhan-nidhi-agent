import React, { createContext, useState } from "react";
import {
  initialDueAmountClients,
  initialHistoryDueAmountClients,
  initialHistoryKycClients,
  initialHistoryPropertyClients,
  initialKycClients,
  initialOverdueClients,
  initialPropertyClients,
} from "./fakeData";

const ClientContext = createContext<ClientsType | null>(null);

export const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  const [dueAmountClients, setDueAmountClients] = useState<DueAmountClients>(
    initialDueAmountClients
  );
  const [propertyClients, setPropertyClients] = useState<PropertyClients>(
    initialPropertyClients
  );
  const [kycClients, setKycClients] = useState<KycClients>(initialKycClients);
  const [overdueClients, setoverdueClients] = useState<OverdueClients>(
    initialOverdueClients
  );
  const [historyDueAmountClients, setHistoryDueAmountClients] =
    useState<HistoryDueAmountClients>(initialHistoryDueAmountClients);
  const [historyPropertyClients, setHistoryPropertyClients] =
    useState<HistoryPropertyClients>(initialHistoryPropertyClients);
  const [historyKycClients, setHistoryKycClients] = useState<HistoryKycClients>(
    initialHistoryKycClients
  );

  return (
    <ClientContext.Provider
      value={{
        dueAmountClients,
        propertyClients,
        kycClients,
        overdueClients,
        historyDueAmountClients,
        historyPropertyClients,
        historyKycClients,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export default ClientContext;
