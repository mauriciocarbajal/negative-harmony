const findOppositeChord = require('./find-opposite-chord');

const tonality = 'D';
const chord = ['D','A'];

const res = findOppositeChord(tonality,chord);

if ((res[0] == 'A') && (res[1] == 'D')){
	console.log("Success!");
} else {
	console.error("TEST FAILED!");
}
