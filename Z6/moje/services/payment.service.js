import { calculateSettledAmount } from "./calculate-payment.service.js"

// TODO handle payment creation


function createPayment(paymentDto){
    const settleAmount = calculateSettledAmount(paymentDto.request_amount, paymentDto.currency);
    console.log(settleAmount);
    const payment = {
        ...paymentDto,
        id: "123",
        creation_date: new Date(),
        settled_amount: settleAmount,
        status: PEYMENT_STATUS.PENDING,

    }
}

// export