function calculateSettledAmount(requestAmount, currency){
    const currencyRate = 3.9;

    const requestAmountInPLN = requestAmount * currencyRate;

    const fee = requestAmountInPLN * 0.05;

    return requestAmountInPLN + fee;
}

export {calculateSettledAmount};