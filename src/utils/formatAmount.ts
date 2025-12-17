export const formatAmount = (amount: number) => {
  return amount.toLocaleString("en-GB", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "narrowSymbol",
    signDisplay: "always",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
