const payments = [];

function savePayment(payment){
    payments.push(payment);
}

function getPayments(){
    return payments;
}

function getPaymentById(paymentId) {
    return payments.find((payment) => payment.id === paymentId);
}

export {savePayment, getPayments, getPaymentById};