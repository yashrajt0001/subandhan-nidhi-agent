type DueAmountClient = {
  customerId: string;
  name: string;
  phone: string;
  loan: "type";
  totalAmount: number;
  paidAmount: number;
  dueAmount: number;
  dueDays: number;
  totalLateCharges: number;
  previousPayments: PreviousPayments;
};

type DueAmountClients = DueAmountClient[];

type HistoryDueAmountClient = {
  customerId: string;
  name: string;
  age: number,
  phone: string;
  loanType: "type";
  loanAmount: number
  paidAmount: number;
  dueAmount: number;
  numberOfEmi: number
  latePayments: number
  status: boolean
};

type HistoryDueAmountClients = HistoryDueAmountClient[]

type PropertyClient = {
  customerId: string;
  name: string;
  phone: string;
  propertyType: "Villa";
  propertyAddress: string;
  propertyValue: number;
};

type PropertyClients = PropertyClient[];

type KycVerifyClient = {
  name: string;
  image: string;
  age: number;
  phone: string;
  email: string;
  address: string;
  zoomMeetTime: Date;
};

type KycVerifiedClient = {
  name: string;
  image: string;
  age: number;
  phone: string;
  email: string;
  address: string;
  zoomMeetTime: Date;
};

type KycClients = {
  verifiedClients: KycVerifiedClient[];
  verifyClients: KycVerifyClient[];
};

type PreviousPayment = {
  amount: number;
  status: "Paid" | "Unpaid";
  date: string;
  dueDays: number;
};

type PreviousPayments = PreviousPayment[];

type ClientsType = {
  dueAmountClients: DueAmountClients;
  propertyClients: PropertyClients;
  kycClients: KycClients;
  overdueClients: OverdueClients;
  historyDueAmountClients: HistoryDueAmountClients
};

type OverdueRespondedClient = {
  customerId: string;
  name: string;
  phone: string;
  address: string;
  loanType: "Business loan";
  totalLoanAMount: number;
  dueAmount: number;
  dueDays: number;
  paidAmount: number;
  reason: string;
  rePayingDate: Date;
  addedInterest: number;
  totalAmount: number;
};

type OverdueUnrespondedClient = {
  customerId: string;
  name: string;
  phone: string;
  address: string;
  loanType: "Business loan";
  totalLoanAMount: number;
  dueAmount: number;
  dueDays: number;
  paidAmount: number;
  rePayingDate: Date;
  addedInterest: number;
  totalAmount: number;
};

type OverdueClients = {
  RespondedClients: OverdueRespondedClient[];
  UnrespondedClients: OverdueUnrespondedClient[];
};
