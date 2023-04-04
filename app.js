const form = document.getElementById('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    getGifs();
});

async function getGifs(){
    try{
        const userInput = document.getElementById('textBox').value;
        console.log('User searched gifs with the term', userInput);

        const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=cRLB1qhZc2JKDzU1DWP0U1r6WcQ8LNbK&q=${userInput}&limit=&offset=&rating=g&lang=en`);
        console.log(res.data);

        const gifArray = res.data.data;
        const randomIndex = Math.floor(Math.random() * gifArray.length);
        const gifUrl = gifArray[randomIndex].images.fixed_height.url;

        const img = document.createElement('img');
        img.setAttribute('src', gifUrl);
        const ul = document.getElementById('gifs');
        ul.appendChild(img);
    }  
    catch{
        alert('Rephrase your search!');
    }
}

const removeBtn = document.getElementById('removeBox');
removeBtn.addEventListener('click', function(){
    const ul = document.getElementById('gifs');
    ul.innerHTML = '';
});
