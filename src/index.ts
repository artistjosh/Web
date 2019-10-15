
import './styles.css';

const number1l = document.getElementById('number1') as HTMLInputElement;
const number2 = document.getElementById('number2') as HTMLInputElement;
const multiplybutton = document.getElementById('multiply') as HTMLInputElement;
const answerE1 = document.getElementById('answer') as HTMLSpanElement;

multiplybutton.addEventListener('click', function () {

    const n1 = number1l.valueAsNumber;
    const n2 = number2.valueAsNumber;

    const answer = multiply(n1, n2); // TODO: put this in a module.

    answerE1.innerHTML = answer.toString();

});
