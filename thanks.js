const userVote = localStorage.getItem('userVote');
const resultParagraph = document.querySelector('.rate-paragraph');

resultParagraph.innerHTML = `You selected ${userVote} out of 5`;

if (userVote === null) {
  resultParagraph.innerHTML = `You continued without voting. Please try again.`;
}