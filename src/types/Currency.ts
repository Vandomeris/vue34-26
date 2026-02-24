export interface CurrencyResponse {
  date: string
  rates: unknown
}

export interface CurrencyList {
  date: string
  rates: CurrencyRate[]
}

interface CurrencyRate {
  name: string
  value: number
}
