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
        const j = Math.floor(Math.random() * (i + 1)); // j expected from 0 to i
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
    const royalRanks = ['10', 'J', 'Q', 'K', 'A'];
    const sameSuit = cards.every(card => card.suit === cards[0].suit);
    const ranksInOrder = cards.map(card => card.rank).reverse();
    console.log(ranksInOrder);
    return sameSuit && ranksInOrder.join('') === royalRanks.join('');
}


function isStraightFlush(cards) {
    return isFlush(cards) && isStraight(cards);
}

// four cards of the same rank
function isFourOfAKind(cards) {
    for (let i = 0; i <= cards.length - 4; i++) {
        if (cards[i].rank === cards[i + 1].rank && cards[i].rank === cards[i + 2].rank && cards[i].rank === cards[i + 3].rank) {
            return true;
        }
    }
    return false;
}


function isFullHouse(cards) {
    // object for counting card ranks
    const rankCounts = {};
    // counting occurrences of individual card ranks
    for (const card of cards) {
        if (rankCounts[card.rank] === undefined) {
            rankCounts[card.rank] = 1;
        } else {
            rankCounts[card.rank]++;
        }
    }

    // array with occurrences of card ranks
    const counts = Object.values(rankCounts);

    const hasTwoOfAKind = counts.includes(2);
    const hasThreeOfAKind = counts.includes(3);

    return hasTwoOfAKind && hasThreeOfAKind;
}


// all cards of the same suit
function isFlush(cards) {
    return cards.every(card => card.suit === cards[0].suit);
}

// five consecutive cards
function isStraight(cards) {
    sortCardsByRank(cards);

    const rankOrder = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    for (let i = 0; i < cards.length - 1; i++) {
        const rankDifference = Math.abs(rankOrder.indexOf(cards[i].rank) - rankOrder.indexOf(cards[i + 1].rank));
        if (rankDifference !== 1) {
            return false;
        }
    }
    return true;
}

// three cards of the same rank
function isThreeOfAKind(cards) {
    for (let i = 0; i <= cards.length - 3; i++) {
        if (cards[i].rank === cards[i + 1].rank && cards[i].rank === cards[i + 2].rank) {
            return true;
        }
    }
    return false;
}

function isTwoPair(cards) {
    const rankCounts = {};

    // counting occurrences of individual card ranks
    for (const card of cards) {
        if (rankCounts[card.rank] === undefined) {
            rankCounts[card.rank] = 1;
        } else {
            rankCounts[card.rank]++;
        }
    }

    // array with occurrences of card ranks
    const counts = Object.values(rankCounts);

    // checking if there are two pairs
    const pairsCount = counts.filter(count => count === 2).length;
    return pairsCount === 2;
}


function isOnePair(cards) {
    for (let i = 0; i < cards.length - 1; i++) {
        if (cards[i].rank === cards[i + 1].rank) {
            return true;
        }
    }
    return false;
}

// examples

// poker królewski
const handRoyalFlush = [
    { suit: 'Hearts', rank: 'A' }, // As Kier
    { suit: 'Hearts', rank: 'K' }, // Król Kier
    { suit: 'Hearts', rank: 'Q' }, // Królowa Kier
    { suit: 'Hearts', rank: 'J' }, // Walet Kier
    { suit: 'Hearts', rank: '10' } // Dziesiątka Kier
];

// poker kolorowy
const handStraightFlush = [
    { suit: 'Diamonds', rank: '8' }, // Ósemka Karo
    { suit: 'Diamonds', rank: '7' }, // Siódemka Karo
    { suit: 'Diamonds', rank: '6' }, // Szóstka Karo
    { suit: 'Diamonds', rank: '5' }, // Piątka Karo
    { suit: 'Diamonds', rank: '4' } // Czwórka Karo
];

// kareta
const handFourOfAKind = [
    { suit: 'Clubs', rank: 'A' }, // As Trefl
    { suit: 'Diamonds', rank: 'A' }, // As Karo
    { suit: 'Hearts', rank: 'A' }, // As Kier
    { suit: 'Spades', rank: 'A' }, // As Pik
    { suit: 'Diamonds', rank: 'K' } // Król Karo
];

// full (trójka i para)
const handFullHouse = [
    { suit: 'Hearts', rank: 'K' }, // Król Kier
    { suit: 'Spades', rank: 'K' }, // Król Pik
    { suit: 'Clubs', rank: 'K' }, // Król Trefl
    { suit: 'Hearts', rank: 'Q' }, // Królowa Kier
    { suit: 'Spades', rank: 'Q' } // Królowa Pik
];

// kolor
const handFlush = [
    { suit: 'Hearts', rank: 'A' }, // As Kier
    { suit: 'Hearts', rank: 'K' }, // Król Kier
    { suit: 'Hearts', rank: '8' }, // Ósemka Kier
    { suit: 'Hearts', rank: '5' }, // Piątka Kier
    { suit: 'Hearts', rank: '2' } // Dwójka Kier
];

// strit (5 kart sąsiednich)
const handStraight = [
    { suit: 'Clubs', rank: '10' }, // Dziesiątka Trefl
    { suit: 'Hearts', rank: '9' }, // Dziewiątka Kier
    { suit: 'Diamonds', rank: '8' }, // Ósemka Karo
    { suit: 'Spades', rank: '7' }, // Siódemka Pik
    { suit: 'Hearts', rank: '6' } // Szóstka Kier
];

// trójka
const handThreeOfAKind = [
    { suit: 'Hearts', rank: 'Q' }, // Królowa Kier
    { suit: 'Clubs', rank: 'Q' }, // Królowa Trefl
    { suit: 'Diamonds', rank: 'Q' }, // Królowa Karo
    { suit: 'Spades', rank: '9' }, // Dziewiątka Pik
    { suit: 'Hearts', rank: '2' } // Dwójka Kier
];

// dwie pary
const handTwoPair = [
    { suit: 'Hearts', rank: 'A' }, // As Kier
    { suit: 'Clubs', rank: 'A' }, // As Trefl
    { suit: 'Spades', rank: '9' }, // Dziewiątka Pik
    { suit: 'Diamonds', rank: '9' }, // Dziewiątka Karo
    { suit: 'Hearts', rank: '2' } // Dwójka Kier
];

// para
const handOnePair = [
    { suit: 'Hearts', rank: 'K' }, // Król Kier
    { suit: 'Clubs', rank: 'K' }, // Król Trefl
    { suit: 'Diamonds', rank: '9' }, // Dziewiątka Karo
    { suit: 'Spades', rank: '8' }, // Ósemka Pik
    { suit: 'Hearts', rank: '2' } // Dwójka Kier
];

// wysoka karta
const handHighCard = [
    { suit: 'Hearts', rank: 'A' }, // As Kier
    { suit: 'Clubs', rank: 'K' }, // Król Trefl
    { suit: 'Diamonds', rank: '9' }, // Dziewiątka Karo
    { suit: 'Spades', rank: '8' }, // Ósemka Pik
    { suit: 'Hearts', rank: '2' } // Dwójka Kier
];


// main program
const deck = createDeck();
shuffleDeck(deck);
const hand = dealCards(deck, 5);
sortCardsByRank(hand);
console.log("Your hand:", hand);

// we can comment out the above card drawing and then below, instead of 'hand', insert examples
const pokerHand = determinePokerHand(hand);
console.log("Your poker hand:", pokerHand);
