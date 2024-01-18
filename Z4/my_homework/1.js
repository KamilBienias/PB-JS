function randomWork() {
    return new Promise((resolve, reject) => {
        // Losujemy liczbę od 0 do 1
        const randomNumber = Math.random();

        // Jeśli liczba jest mniejsza niż 0.5, rozwiązujemy obietnicę
        if (randomNumber < 0.5) {
            resolve("Now I work"); // Rozwiązanie obietnicy
        } else {
            reject("Now I don’t"); // Odrzucenie obietnicy
        }
    });
}

// Wywołanie funkcji i obsługa wyniku
randomWork()
    .then((result) => {
        console.log("Resolved:", result); // Wykonuje się, jeśli obietnica została rozwiązana
    })
    .catch((error) => {
        console.log("Rejected:", error); // Wykonuje się, jeśli obietnica została odrzucona
    });