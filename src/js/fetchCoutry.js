export default fetchCountry

async function fetchCountry(searchQuery) {
    const url = `https://restcountries.com/v2/name/${searchQuery}`
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.status);
    }
    return await response.json();
}
