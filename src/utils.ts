export const getQueryParam = (queryParam: string) => {
  const search = new URLSearchParams(window.location.search)
  return Number(search.get(queryParam))
}

export const setQueryParam = (queryParam: string, value: number) => {
  const url = new URL(window.location.href)
  url.searchParams.set(queryParam, String(value))
  window.history.pushState({}, '', url)
}
