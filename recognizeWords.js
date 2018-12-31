const Node = require('./models/Node');
const Automata = require('./models/Automata');

const automata = new Automata;
const node1 = new Node();
const node2 = new Node();
const node3 = new Node();
const node4 = new Node();

node1.setId = 'saludo';
node2.setId = 'despedida';
node3.setId = 'pregunta';
node4.setId = 'saludo2';
node1.setData = 'Hola';
node2.setData = 'Adios';
node3.setData = '¿Como estas?';
node4.setData = 'Saludos';
node1.setConection = node2;
node1.setConection = node3;
node1.setConection = node4;
node2.setConection = node1;
node2.setConection = node3;
node2.setConection = node4;
node3.setConection = node1;
node3.setConection = node2;
node3.setConection = node4;
node4.setConection = node1;
node4.setConection = node2;
node4.setConection = node3;

automata.setNode = node1;
automata.setNode = node2;
automata.setNode = node3;
automata.setNode = node4;

console.log(automata.initSearch('Hola'));
