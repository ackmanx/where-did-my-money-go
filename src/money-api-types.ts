export interface MoneyResponse {
  creditCards: CreditCard[]
  incomes: Income[]
  investments: Investment[]
  loans: Loan[]
  misc: Misc[]
  people: People[]
  subscriptions: Subscription[]
  utilities: Utility[]
  healthcare: Healthcare[]
}

export interface BaseItem {
  name: string
  notes: string
}

export interface CreditCard extends BaseItem {
  apr: number
  creditReportName: string
  website: string
}

export interface Income extends BaseItem {
  amount: number
  rate: string
}

export interface Investment extends BaseItem {
  type: string
  website: string
}

export interface Loan extends BaseItem {
  amount: number
  bank: string
  apr: number
  creditReportName: string
  website: string
}

export interface Misc extends BaseItem {
  amount: number
}

export interface People extends BaseItem {
  amount: number
  direction: string
}

export interface Subscription extends BaseItem {
  amount: number
}

export interface Utility extends BaseItem {
  amount: number
  website: string
}

export interface Healthcare extends BaseItem {
  amount: number
}
