export const getQueryParam = (queryParam: string) => {
  const search = new URLSearchParams(window.location.search)
  return Number(search.get(queryParam))
}

export const setQueryParam = (queryParam: string, value: number) => {
  const url = new URL(window.location.href)
  url.searchParams.set(queryParam, String(value))
  window.history.pushState({}, '', url)
}

export const formatMoney = (amount: number) => {
  return `\$${amount.toLocaleString()}`
}

export const sumAmounts = (arr: any[]) => arr.reduce((acc, current) => acc + current.amount, 0)
