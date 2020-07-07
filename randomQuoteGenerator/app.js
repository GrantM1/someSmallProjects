const simpleQuotes = [
 {
  name: 'author number 1',
  quote: 'quote number 1',
 },
 {
  name: 'author number 2',
  quote: 'quote number 2',
 },
 {
  name: 'author number 3',
  quote: 'quote number 3',
 },
 {
  name: 'author number 4',
  quote: 'quote number 4',
 },
 {
  name: 'author number 5',
  quote: 'quote number 5',
 },
 {
  name: 'author number 6',
  quote: 'quote number 6',
 },
 {
  name: 'author number 7',
  quote: 'quote number 7',
 },
 {
  name: 'author number 8',
  quote: 'quote number 8',
 },
 {
  name: 'author number 9',
  quote: 'quote number 9',
 },
 {
  name: 'author number 10',
  quote: 'quote number 10',
 },
 {
  name: 'author number 11',
  quote: 'quote number 11',
 },
 {
  name: 'author number 12',
  quote: 'quote number 12',
 },
 {
  name: 'author number 13',
  quote: 'quote number 13',
 },
];

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');

const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);
function displayQuote() {
 let number = Math.floor(Math.random() * simpleQuotes.length);
 // console.log(number);
 quoteAuthor.innerHTML = simpleQuotes[number].name;
 quote.innerHTML = simpleQuotes[number].quote;
}
