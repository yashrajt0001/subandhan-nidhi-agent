import React, { createContext, useEffect, useState } from "react";
import { useSocket } from "../lib/useSocket";

const ClientContext = createContext<ClientsType | null>(null);

export const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  const socket = useSocket();

  const [dueLoanClients, setDueLoanClients] = useState<DueLoanClients | null>(
    null
  );
  const [dueSchemeClients, setDueSchemeClients] =
    useState<DueSchemeClients | null>(null);
  const [propertyClients, setPropertyClients] =
    useState<PropertyClients | null>(null);
  const [kycClients, setKycClients] = useState<KycClients | null>(null);
  const [overdueClients, setoverdueClients] = useState<OverdueClients | null>(
    null
  );
  const [historyDueAmountClients, setHistoryDueAmountClients] =
    useState<HistoryDueAmountClients | null>(null);
  const [historyPropertyClients, setHistoryPropertyClients] =
    useState<HistoryPropertyClients | null>(null);
  const [historyKycClients, setHistoryKycClients] =
    useState<HistoryKycClients | null>(null);
  const [pendingDueAmountClients, setPendingDueAmountClients] =
    useState<PendingDueAmountClients | null>(null);
  const [pendingKycClients, setPendingKycClients] =
    useState<PendingKycClients | null>(null);
  const [pendingPropertyClients, setPendingPropertyClients] =
    useState<PendingPropertyClients | null>(null);

  useEffect(() => {
    if (socket) {
      // Assigned users
      socket.on("0280777F37D4F4JBBU78D21CEC701463", (data) => {
        console.log("assigned user", data);
      });

      // Active loans
      socket.on("B5EC69CF4C7428ND8CAGJB851E284EE7", (data) => {
        console.log("active loans", data.data.details.loans);
        setDueLoanClients(data.data.details.loans)
      });

      // Overdue loans
      // socket.on('B5EC69CF4C7428ND8CABF5851E284EE7', (data)=>{
      //   console.log(data)
      // })

      // Closed loans
      // socket.on('B5EC69CF4C74BIJN8CABF5851E284EE7', (data)=>{
      //   console.log(data)
      // })

      // Due loans
      // socket.on('B5EC69CF4C74BIJN8CABF5851E284EE7', (data)=>{
      //   console.log(data)
      // })

      // Active schemes
      // socket.on('S5ECC9CF4C7428EE8CABF5851E284EE7', (data)=>{
      //   console.log(data)
      // })

      // Overdue schemes
      // socket.on('S5ECC9CF4C7428EE8CBJBH851E284EE7', (data)=>{
      //   console.log(data)
      // })

      // Matures schemes
      // socket.on('S5ECC9CF4C7428EE8CBJBH851E284EEE', (data)=>{
      //   console.log(data)
      // })

      // Due schemes
      // socket.on('S5ECC9CF4C7428EE8CABF58S1E284EE7', (data)=>{
      //   console.log(data)
      // })
    }
  }, [socket]);

  return (
    <ClientContext.Provider
      value={{
        dueLoanClients,
        dueSchemeClients,
        propertyClients,
        kycClients,
        overdueClients,
        historyDueAmountClients,
        historyPropertyClients,
        historyKycClients,
        pendingDueAmountClients,
        pendingKycClients,
        pendingPropertyClients,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export default ClientContext;
