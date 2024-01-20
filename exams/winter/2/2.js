/* EXAM Create a solution that will tell us what poker set we have. The solution is to deal us 5 cards from the standard 52 card deck at random. Based on cards on our hand the program should tell us what is the best poker set. Reference: https://pl.wikipedia.org/wiki/Poker#Starsze%C5%84stwo_uk%C5%82ad%C3%B3w_kart*/

function createDeck() {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    const deck = [];
    for (const suit of suits) {
        for (const rank of ranks) {
            deck.push({ suit, rank });
        }
    }

    return deck;
}

function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

// Function to deal 5 cards from the deck
function dealCards(deck, numCards) {
    return deck.slice(0, numCards);
}

function sortCardsByRank(cards) {
    cards.sort((a, b) => {
        const rankOrder = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        return rankOrder.indexOf(a.rank) - rankOrder.indexOf(b.rank);
    });
}

function determinePokerHand(cards) {
    if (isRoyalFlush(cards)) {
        return "Royal Flush";
    } else if (isStraightFlush(cards)) {
        return "Straight Flush";
    } else if (isFourOfAKind(cards)) {
        return "Four of a Kind";
    } else if (isFullHouse(cards)) {
        return "Full House";
    } else if (isFlush(cards)) {
        return "Flush";
    } else if (isStraight(cards)) {
        return "Straight";
    } else if (isThreeOfAKind(cards)) {
        return "Three of a Kind";
    } else if (isTwoPair(cards)) {
        return "Two Pair";
    } else if (isOnePair(cards)) {
        return "One Pair";
    } else {
        return "High Card";
    }
}

function isRoyalFlush(cards) {
    // Check for a Royal Flush (A, K, Q, J, 10 of the same suit)
    // Implement your logic here
    return false;
}

function isStraightFlush(cards) {
    // Check for a Straight Flush (Five consecutive cards of the same suit)
    // Implement your logic here
    return false;
}

function isFourOfAKind(cards) {
    // Check for Four of a Kind (Four cards of the same rank)
    // Implement your logic here
    return false;
}

function isFullHouse(cards) {
    // Check for a Full House (Three cards of one rank and two cards of another rank)
    // Implement your logic here
    return false;
}

function isFlush(cards) {
    // Check for a Flush (All cards of the same suit)
    // Implement your logic here
    return false;
}

function isStraight(cards) {
    // Check for a Straight (Five consecutive cards)
    // Implement your logic here
    return false;
}

function isThreeOfAKind(cards) {
    // Check for Three of a Kind (Three cards of the same rank)
    // Implement your logic here
    return false;
}

function isStraight(cards) {
    // Check for Two Pair (Two pairs of cards with the same rank)
    // Implement your logic here
    return false;
}

function isThreeOfAKind(cards) {
    // Check for One Pair (A pair of cards with the same rank)
    // Implement your logic here
    return false;
}

function isTwoPair(cards) {
    // Implement your logic here
    return false;
}

function isOnePair(cards) {
    // Implement your logic here
    return false;
}

// Main program
const deck = createDeck();
shuffleDeck(deck);
const hand = dealCards(deck, 5);
sortCardsByRank(hand);
console.log("Your hand:", hand);

const pokerHand = determinePokerHand(hand);
console.log("Your poker hand:", pokerHand);
