const BMIData = [
    { name: "Ultra Maigreur", color: "midnightblue", range: [0, 18.5] },
    { name: "Maigre", color: "green", range: [18.5, 25] },
    { name: "Bonne santé", color: "lightcoral", range: [25, 30] },
    { name: "Surpoids", color: "orange", range: [30, 35] },
    { name: "Obésité modéré", color: "crimson", range: [35, 40] },
    { name: "Obésité sévére", color: "purple", range: 40 },
  ];
  
  // IMC = poids en kg / taille² en m
  
const form = document.querySelector("form");
const displayBMI = document.querySelector('.bmi-value');
const description = document.querySelector('.description');

form.addEventListener('submit',onFormSubmit);
  
function onFormSubmit(e) {
    e.preventDefault();
    const inputs = document.querySelectorAll('input');
    const height = inputs[0].value;
    const weight = inputs[1].value;

    if (!height || !weight || height <= 0 || weight <= 0) {
        handleError();
        return;
    }

    const BMI = (weight / (height / 100) ** 2).toFixed(1);
    console.log(BMI);
    showResult(BMI)
}

function handleError() {
    displayBMI.textContent = 'Echec'
    result.textContent = 'Remplissez correctement le formulaire'
} 


function showResult(BMI){
    let rank;
    for (let i=0; i<BMIData.length; i++){
        const data = BMIData[i];
        if (BMI > data.range[0] && BMI <= data.range[1]) {
            rank = data;
            break;
        } else if (type of data.range === 'number' && data.range >= 40){
            rank = data;
            break
        }
    }
    displayBMI.textContent = BMI;
    displayBMI.style.color = rank.color;
    description.textContent = rank.name;
}