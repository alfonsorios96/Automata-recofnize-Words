'use strict';

class State {
    constructor(name = '', isFinal = false) {
        this._isFinal = isFinal;
        this._name = name;
    }

    get isFinal() {
        return this._isFinal;
    }

    get name () {
        return this._name;
    }
}

class Automata {
    constructor() {
        this._states = [];
        this._alphabeth = [];
        this._initialState = null;
        this._lambda = (q1, char) => {
            // if q1 has transition with char then return the new state if else return the same sate q1
        };
        this._transitions = new Map();
    }

    get states() {
        return this._states;
    }

    set states(states) {
        this._states = states;
    }

    get alphabeth() {
        return this._alphabeth;
    }

    set alphabeth(alphabeth) {
        this._alphabeth = alphabeth;
    }

    get initialState() {
        return this._initialState;
    }

    set initialState(state) {
        this._initialState = state;
    }

    get transitions() {
        return this._transitions;
    }

    set transitions(transitions) {
        this._transitions = transitions;
    }

    run(expression) {
        // q0 es el estado inicial, el estado en qué el autómata se encuentra inicialmente.
        let currentState = this.initialState;
        // Σ el alfabeto, es decir, un conjunto finito de símbolos que formarán palabras o cadenas. Está dado por expression
        for (const char of expression) {
            // δ es la función de transición. Determina el comportamiento del autómata. δ(currentState, char) => qj
            const lambda = this.transitions.get(currentState);
            currentState = lambda(expression, char);
        }
        return currentState.isFinal;
    }
}

module.exports = {State, Automata};
