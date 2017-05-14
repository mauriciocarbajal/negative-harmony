const findOppositeChord = require('./find-opposite-chord');

chords = [
	['C','E','G','B'],
	['D','F','A','C'],
	['E','G','B','D'],
	['F','A','C','E'],
	['G','B','D','F'],
	['A','C','E','G'],
	['B','D','F','A']
];

console.log("Find all the diatonic chords' opposites (in C major key)");
chords.map((chord) => console.log(chord,' => ',findOppositeChord('C',chord)));
