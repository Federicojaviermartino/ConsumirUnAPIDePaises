function getCountry() {
    const countryList = document.getElementById('country-list')
    const url = 'https://restcountries.com/v3.1/all'

    fetch(url)
        .then(response => response.json())
        .then(paises => {
            console.log(paises)
            paises.forEach(pais => {
                const list = document.createElement('li')
                list.textContent = pais.name.common;
                const flagImg = document.createElement('img')
                flagImg.src = pais.flags.png
                list.appendChild(flagImg)
                countryList.appendChild(list)
            })
            
        });
}
getCountry(); 