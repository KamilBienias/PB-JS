async function fetchCharactersFromEpisode(episodeNumber) {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/episode/${episodeNumber}`);
        
        if (!response.ok) {
            throw new Error('Could not fetch data');
        }
        
        const episodeData = await response.json();
        
        const characterURLs = episodeData.characters;
        
        const characterPromises = characterURLs.map(async (url) => {
            const characterResponse = await fetch(url);
            if (!characterResponse.ok) {
                throw new Error('Could not fetch character data');
            }
            const characterData = await characterResponse.json();
            // Zwracamy tylko imię postaci
            return characterData.name;
        });
        
        const charactersData = await Promise.all(characterPromises);
        return charactersData;
    } catch (error) {
        console.error('Error fetching characters:', error);
        throw error;
    }
}

const episodeNumber = 7;

fetchCharactersFromEpisode(episodeNumber)
    .then((characters) => {
        console.log('Characters from episode', episodeNumber);
        console.log(characters);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
