export function rupee(value) {
    const round = Math.ceil(value);
    return round.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    })
}