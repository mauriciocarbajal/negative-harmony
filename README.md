# negative-harmony

So, what is this 'negative harmony' thing?

Just watch: https://youtu.be/DnBr070vcNE?t=2m21s

This is a simple tool to explore negative harmony in a decent time (of course, if you happen to be other than Jacob!).

If you want to use it, just require it as a node module (see index.js, should be pretty straightforward).


## Usage:
`findOppositeChord('C',['E','Ab','B','D']);`

That will give you the opposite chord of an E7 chord (in the 'C' tonality).

This is the index.js output:

```
Find all the diatonic chords' opposites (in C major key)

[ 'C', 'E', 'G', 'B' ] ' => ' [ 'G', 'Eb', 'C', 'Ab' ]

[ 'D', 'F', 'A', 'C' ] ' => ' [ 'F', 'D', 'Bb', 'G' ]

[ 'E', 'G', 'B', 'D' ] ' => ' [ 'Eb', 'C', 'Ab', 'F' ]

[ 'F', 'A', 'C', 'E' ] ' => ' [ 'D', 'Bb', 'G', 'Eb' ]

[ 'G', 'B', 'D', 'F' ] ' => ' [ 'C', 'Ab', 'F', 'D' ]

[ 'A', 'C', 'E', 'G' ] ' => ' [ 'Bb', 'G', 'Eb', 'C' ]

[ 'B', 'D', 'F', 'A' ] ' => ' [ 'Ab', 'F', 'D', 'Bb' ]

```