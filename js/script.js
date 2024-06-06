document.addEventListener('DOMContentLoaded', () => {
   const submitBtn = document.getElementById('submitBtn');
   const outputBox = document.getElementById('outputBox');
   const outputContent = document.getElementById('outputContent');
   const resetBtn = document.getElementById('resetBtn');

   submitBtn.addEventListener('click', () => {
      const numberInput = document.getElementById('numberInput').value;
      const inputType = document.getElementById('inputType').value;
      const outputType = document.getElementById('outputType').value;

       console.log(numberInput);

      let outputValue = null;

      // Example conversion based on selected input and output types
      if (inputType === 'celsius' && outputType === 'fahrenheit') {
         outputValue = (numberInput * 9 / 5) + 32;
      } else if (inputType === 'celsius' && outputType === 'kelvin') {
         outputValue = parseFloat(numberInput) + 273.15;
      } else if (inputType === 'fahrenheit' && outputType === 'celsius') {
         outputValue = (numberInput - 32) * 5 / 9;
      } else if (inputType === 'fahrenheit' && outputType === 'kelvin') {
         outputValue = ((numberInput - 32) * 5 / 9) + 273.15;
      } else if (inputType === 'kelvin' && outputType === 'celsius') {
         outputValue = numberInput - 273.15;
      } else if (inputType === 'kelvin' && outputType === 'fahrenheit') {
         outputValue = ((numberInput - 273.15) * 9 / 5) + 32;
      } else {
         outputValue = numberInput; // No conversion needed
      }


      // Generate the output message
      let outputMessage = `Please enter a temperature value `;
      if (numberInput !== null) {
         outputMessage = `The temperature in ${outputType} : ${outputValue}`;
      }
      // Update and display the output box
      outputContent.innerHTML = outputMessage;
      outputBox.classList.remove('hidden');
   });

   resetBtn.addEventListener('click', () => {
      const outputMessage = `Please enter Values`;
      outputContent.innerHTML = outputMessage;
      outputBox.classList.add('hidden');

   });

});
