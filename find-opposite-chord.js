const getNotesFromKey = (key) => {
	const notesFromKeyC = ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B'];
	const keyIndex = noteToIndex(key,notesFromKeyC);
	const notesPre = notesFromKeyC.slice(0,keyIndex);
	const notesPost = notesFromKeyC.slice(keyIndex);
	return notesPost.concat(notesPre);
};

const noteToIndex = (note,notes) => notes.findIndex((x) => (x == note));
const indexToNote = (index,notes) => (index < 12) ? notes[index] : '?';

const getOppositeIndex = (index) => {
	if (index < 8){
		//fifth interval half center
		return (7 - index);
	} else {
		//fourth interval half center
		const newIndex = index - 8; //	newIndex always in [0,3]
		const newOpposite = 3 - newIndex;
		return newOpposite+8;
	}
};

const getOppositeNote = (x,notes) => indexToNote(getOppositeIndex(noteToIndex(x,notes)),notes);

const findOppositeChord = (key, chord) => chord.map(x => getOppositeNote(x,getNotesFromKey(key)));

module.exports = findOppositeChord;