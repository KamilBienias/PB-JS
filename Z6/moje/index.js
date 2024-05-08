// import * as PaymentModule from "./services/payment.service.js";
import {createPayment} from "./services/payment.service.js";
import * as RepositoryModule from "./services/repository.service.js";

const baseObj = {
    user_id: "user-1",
    request_amount: 100,
    currency: "USD",
}

async function processPayment(paymentDto){
    const payment = createPayment(paymentDto);
    RepositoryModule.savePayment(payment);

    console.log(RepositoryModule.getPayments());
    return payment;
    // TODO create a payment
    // const
    // TODO save the payment in memory array
    // TODO return the payment
}

// {
//     payment_id: "123",
// }

function processPaymentSuccess(paymentConfirmationDto) {
    const payment = RepositoryModule.getPaymentById(paymentConfirmationDto.payment_id);
    console.log("payment", payment);
};