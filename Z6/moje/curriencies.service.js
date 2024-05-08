async function getCurrencyRate(currency){
    try {
        const response = await axios.get(
            `https://currency-rate-cache.vercel.app/rate?base=${currency}&symbol=${DEFAULT_CURRENCY}`
        )
    return response.data.rate;
    } catch (error) {
        console.error("Error while fetching currency rate", error);
        return 3.9;
    }
}

// export
