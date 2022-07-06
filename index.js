const quotes = document.getElementById('quotes');
const author = document.getElementById('author');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

let realData = "";
let quotesData = "";

const tweetNow = () => {
    let rnum = Math.floor(Math.random() * 50);
    let tweet = `https://twitter.com/intent/tweet?text=${realData[rnum].text} ${realData[rnum].author}`;
    window.open(tweet);
}

const getNewQuotes = () => {
    let rnum = Math.floor(Math.random() * 50);

    quotesData = realData[rnum];

    quotes.innerText = `${realData[rnum].text}`;

    if (quotesData.author === null) {
        author.innerText = '  - unknown'
    }

    else {
        author.innerText = `  - ${realData[rnum].author}`;
    }





}
const getQuotes = async () => {

    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realData = await data.json();
        getNewQuotes();

    } catch (error) {

    }
}

btn1.addEventListener('click', tweetNow)

btn2.addEventListener('click', getNewQuotes);

getQuotes();