import React, { createContext, useState } from "react";
import {
  initialDueAmountClients,
  initialHistoryDueAmountClients,
  initialHistoryKycClients,
  initialHistoryPropertyClients,
  initialKycClients,
  initialOverdueClients,
  initialPendingDueAmountClients,
  initialPendingKycClients,
  initialPendingPropertyClients,
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
  const [pendingDueAmountClients, setPendingDueAmountClients] = useState<PendingDueAmountClients>(
    initialPendingDueAmountClients
  );
  const [pendingKycClients, setPendingKycClients] = useState<PendingKycClients>(
    initialPendingKycClients
  );
  const [pendingPropertyClients, setPendingPropertyClients] = useState<PendingPropertyClients>(
    initialPendingPropertyClients
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
        pendingDueAmountClients,
        pendingKycClients,
        pendingPropertyClients
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export default ClientContext;
