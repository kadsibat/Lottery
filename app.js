const input_number = document.querySelector('input[name=number]');
const lucky_number_button = document.querySelector('.lucky-number');
const output = document.querySelector('.output');

function randomNumberCreator() {
    let lucky_number = '';
    for (let i = 0; i < 6; i++) {
        lucky_number += Math.floor(Math.random() * 99) + 1;
        if (i !== 5) {
            lucky_number += '-';
        } else {
            lucky_number += '|';
        }
    }

    while (true) {
        let joker_number = Math.floor(Math.random() * 89) + 1;
        if (!lucky_number.includes(joker_number)) {
            lucky_number += joker_number + '|';
            break;
        }
    }

    lucky_number += Math.floor(Math.random() * 89) + 1;

    return lucky_number;
}

let child_remover;
lucky_number_button.addEventListener('click', function(e) {
    e.preventDefault();
    output.innerHTML = '';

    if (0< input_number.value && input_number.value <9) {
        for (let i = 0; i < input_number.value; i++) {
            let p_creator = document.createElement('p');
            p_creator.innerHTML = randomNumberCreator();
            output.appendChild(p_creator);
        }
    } else {
        alert('Type number between 1-8!');
    }

});