const quotes = [
  'Be the change you wish to see in the world.',
  "In three words I can sum up everything I've learned about life: it GOSE on.",
  'The only way to do great work is to love what you do.',
  'Success is not final, failure is not fatal: It is the courage to continue that counts.',
  'Success is not final, failure is not fatal: It is the courage to continue that counts.',
  "Believe you can and you're halfway there.",
];

const quoteContainer = document.getElementById('quote-container');
const generateBtn = document.getElementById('generate-btn');
const shareBtn = document.getElementById('share-btn');

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteContainer.textContent = randomQuote;
}

function shareOnTwitter() {
  const quote = encodeURIComponent(quoteContainer.textContent);
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote}`;
  window.open(twitterUrl, '_blank');
}

generateBtn.addEventListener('click', generateQuote);
shareBtn.addEventListener('click', shareOnTwitter);
