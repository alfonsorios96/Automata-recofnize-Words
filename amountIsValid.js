'use strict';

// Determinar si una cantidad es válida o no.

/*
* @description $0 is valid
* @description 0 is not valid
* @description $100 is valid
* @description $1,000 is valid
* @description $1000 is not valid
* */

const {Automata, State} = require('./model/automata');

const automata = new Automata();
// Se determina que sólo los siguientes caractéres pueden pertenecer al alfabeto
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const symbols = ['$'];
const splits = [','];
automata.alphabeth = [...numbers, ...symbols, ...splits];
// Se determinan los estados posibles del autómata; symbol [$], number [0-9] y split [coma]
automata.states = [new State('symbol'), new State('number', true), new State('split')];
// Se determina que el primer caracter de la expresión deberá ser un símbolo, en este caso el $
automata.initialState = automata.states[0];
const transitions = new Map();
// Reglas para Symbol
transitions.set(automata.states[0], (expression, char) => {
    if (char === '$' && expression.indexOf(char) === 0) {
        return automata.states[1];
    } else {
        return automata.states[0];
    }
});
// Reglas para Number
transitions.set(automata.states[1], (expression, char) => {
    const index = expression.indexOf(char);
    // Validar que cada 3 números exista una coma
    const before1 = numbers.includes(expression[index - 1]);
    const before2 = numbers.includes(expression[index - 2]);
    if (before1 && before2) {
        return automata.states[2];
    }
    return automata.states[1];
});
// Reglas para Split
transitions.set(automata.states[2], (expression, char) => {
    const index = expression.indexOf(char);
    // Validar que antes de la coma, exista un número
    if (char === ',' && numbers.includes(expression[index - 1])) {
        return automata.states[1];
    } else {
        return automata.states[2];
    }
});
// Se determinan las reglas para validar número
automata.transitions = transitions;

const rs = automata.run('$12,34,56');
console.log(rs);

