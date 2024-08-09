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

type PreviousPayments = PreviousPayment[];

type DueAmountClients = DueAmountClient[];

type HistoryDueAmountClient = {
  customerId: string;
  name: string;
  age: number;
  phone: string;
  loanType: "type";
  loanAmount: number;
  paidAmount: number;
  dueAmount: number;
  numberOfEmi: number;
  latePayments: number;
  status: boolean;
};

type HistoryDueAmountClients = HistoryDueAmountClient[];

type PropertyClient = {
  customerId: string;
  name: string;
  phone: string;
  propertyType: "Villa";
  propertyAddress: string;
  propertyValue: number;
};

type PropertyClients = PropertyClient[];

type HistoryPropertyClient = {
  customerId: string;
  name: string;
  phone: string;
  age: number;
  propertyType: "building";
  status: boolean;
};

type HistoryPropertyClients = HistoryPropertyClient[];

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

type HistoryKycClient = {
  name: string;
  image: string
  age: number;
  phone: string;
  email: string;
  address: string;
  status: boolean;
};

type HistoryKycClients = HistoryKycClient[]

type PendingDueAmountClient = {
  customerId: string
  name: string
  phone: string
  loan: 'type'
  totalAmount: number
  paidAmount: number
  dueAmount: number
  dueDays: number
  totalLateCharges: number
  previousPayments: PreviousPayments
}

type PendingDueAmountClients = PendingDueAmountClient[]

type PendingPropertyClient = {
  customerId: string
  name: string
  phone: string
  propertyType: 'building'
  propertyAddress: string
  propertyValue: number
}

type PendingPropertyClients = PendingPropertyClient[]

type PreviousPayment = {
  amount: number;
  status: "Paid" | "Unpaid";
  date: string;
  dueDays: number;
};

type PendingKycVerifyClient = {
  name: string
  age: number
  phone: string
  email: string
  address: string
  dateOfRequest: date
}

type PendingKycVerifiedClient = {
  name: string
  age: number
  phone: string
  email: string
  address: string
  zoomMeetTime: date
}

type PendingKycClients = {
  pendingKycVerifyClients: PendingKycVerifyClient[]
  pendingKycVerifiedClients: PendingKycVerifiedClient[]
}


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

type ClientsType = {
  dueAmountClients: DueAmountClients;
  propertyClients: PropertyClients;
  kycClients: KycClients;
  overdueClients: OverdueClients;
  historyDueAmountClients: HistoryDueAmountClients;
  historyPropertyClients: HistoryPropertyClients;
  historyKycClients: HistoryKycClients
  pendingDueAmountClients: PendingDueAmountClients
  pendingKycClients: PendingKycClients
  pendingPropertyClients: PendingPropertyClients
};

type Agent = {
  agentId: string
  name: string
  email: string
  phone: string 
}