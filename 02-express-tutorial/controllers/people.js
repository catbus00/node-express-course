// const people = require('../data');

// function getPeople (req, res) {
//     res.json(people);
// }

// function addPerson (req, res) {
//     if (req.body.name) {
//         people.push({ id: people.length + 1, name: req.body.name });
//         res.status(201).json({ success: true, name: req.body.name });
//     } else {
//         res.status(400).json({ success: false, message: "Please provide a name" });
//     }
// }

// router.get('/:id', (req, res) => {
//     const personId = parseInt(req.params.id); 
//     const person = peopleArray.find(person => person.id === personId);

//     if (person) {
//         res.status(200).json(person);
//     } else {
//         res.status(404).json({ message: "Person not found" });
//     }
// });


// module.exports = { getPeople, addPerson }