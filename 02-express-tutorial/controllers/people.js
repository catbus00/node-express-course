const { people } = require('../data');

function getPeople (req, res) {
    res.json(people);
}

function addPerson (req, res) {
    if (req.body.name) {
        people.push({ id: people.length + 1, name: req.body.name });
        res.status(201).json({ success: true, name: req.body.name });
    } else {
        res.status(400).json({ success: false, message: 'Please provide a name' });
    }
}

function getPersonById (req, res) {
    const personId = parseInt(req.params.id);
    const person = people.find(person => person.id === personId);

    if (person) {
        res.status(200).json(person);
    } else {
        res.status(404).json({ message: 'Person not found' });
    }
}

function updatePerson (req, res) {
    const personId = parseInt(req.params.id);
    const personIndex = people.findIndex((person) => person.id === personId);
    
    if (personIndex !== -1) {
        if (req.body.name) {
            people[personIndex].name = req.body.name;
            res.status(200).json({ success: true, message: 'Person updated' });
        } else {
            res.status(400).json({ success: false, message: 'Please provide a name' });
        }
    } else {
        res.status(404).json({ message: 'Person not found' });
    }
}

function deletePerson (req, res) {
    const personId = parseInt(req.params.id);
    const person = people.find(person => person.id === personId);
    if (person !== -1) {
        const updatedPeople = people.filter(person => person.id !== personId);
        people.length = 0; 
        Array.prototype.push.apply(people, updatedPeople); 
        res.status(204).end();
    } else {
        res.status(404).json({ message: 'Person not found' });
    }
}


module.exports = { getPeople, addPerson, getPersonById, updatePerson, deletePerson }