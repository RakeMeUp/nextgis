export function currencyFormatter(number: number): string {
    const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
        currency: "HUF",
        style: "currency",
        minimumFractionDigits: 0,
    });

    return CURRENCY_FORMATTER.format(number);
}
