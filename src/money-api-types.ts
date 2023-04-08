export interface MoneyResponse {
  creditCards: CreditCard[]
  incomes: Income[]
  investments: Investment[]
  loans: Loan[]
  misc: Misc[]
  people: People[]
  subscriptions: Subscription[]
  utilities: Utility[]
}

export interface CreditCard {
  name: string
  apr: number
  creditReportName: string
  website: string
  notes: string
}

export interface Income {
  name: string
  amount: number
  rate: string
  notes: string
}

export interface Investment {
  name: string
  type: string
  website: string
  notes: string
}

export interface Loan {
  name: string
  amount: number
  bank: string
  apr: number
  creditReportName: string
  website: string
  notes: string
}

export interface Misc {
  name: string
  amount: number
  notes: string
}

export interface People {
  name: string
  amount: number
  direction: string
  notes: string
}

export interface Subscription {
  name: string
  amount: number
  notes: string
}

export interface Utility {
  name: string
  amount: number
  website: string
  notes: string
}
