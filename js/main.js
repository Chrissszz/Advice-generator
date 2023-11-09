function displayAdvice(){

fetch('https://api.adviceslip.com/advice')
  .then(response => {
    if (!response.ok) {
      throw new Error('Could not get API');
    }
    return response.json();
  })
  .then(data => {
    // Extract the advice
    console.log(data);
    const advice = data.slip.advice;
    const getId = data.slip.id;

    // Add quotation marks to the advice
    const adviceWithQuotes = `"${advice}"`;

    // Update the <p> element with the advice
    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = adviceWithQuotes;
    const adviceNumber = document.getElementById('advice');
    adviceNumber.textContent = `ADVICE #${getId}`
    
    const diceCircle = document.querySelector('.diceCircle');
    diceCircle.addEventListener('click', displayAdvice);
  })
  .catch(error => {
    console.error('error', error);
  });
}
displayAdvice();