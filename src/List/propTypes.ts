type Item = {
  symbol: string;
  quantity: number;
  ltp: number;
  avgPrice: number;
  close: number
}

type SummaryData = {
  totalPL: number;
  sumOfAllCurrentValue: number;
  sumOfAllInvestment: number;
  todayPL: number;
}