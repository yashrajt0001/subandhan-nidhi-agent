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
};
