export interface MoneyResponse {
  creditCards: CreditCard[]
  incomes: Incomes[]
  investments: Investments[]
  loans: Loans[]
  misc: Misc[]
  people: People[]
  subscriptions: Subscriptions[]
  utilities: Utilities[]
}

export interface CreditCard {
  name: string
  apr: number
  creditReportName: string
  website: string
  notes: string
}

export interface Incomes {
  name: string
  amount: number
  rate: string
  notes: string
}

export interface Investments {
  name: string
  type: string
  website: string
  notes: string
}

export interface Loans {
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

export interface Subscriptions {
  name: string
  amount: number
  notes: string
}

export interface Utilities {
  name: string
  amount: number
  website: string
  notes: string
}
