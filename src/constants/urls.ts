export const API_URL =
  'https://api.nbp.pl/api/exchangerates/tables/A/?format=json'

export const API_URL_WITH_DATE = (date: string) =>
  `https://api.nbp.pl/api/exchangerates/tables/A/${date}/?format=json`
