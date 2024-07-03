# Wordle Clone

Just another clone of the popular game, Wordle.

## Notable Tools Used

- Parcel (build tool)
- React (to do React stuff)

## General Outline of How It Works

1. Player types in a word to make a guess
2. We apply our input validation to, ya know, validate their input...
3. Then we split their guess into its individual characters to be put into nice little boxes (Cell)
4. Now we also check each letter against each of the answer's letters
5. Colors are assigned to each Cell depending on if it matches in character and location (green), doesn't match at all (grey), or matches the character but is not in the correct spot (yellow)
6. The player gets six tries to guess the word and is shown a banner at the end for a win or lose.
7. They can restart the game for a new word if they want

## Things I learned

- Picking up Parcel for the first time took a second to figure out. But it's simple enough.
- File structure. Establishing an organized file structure is a beautiful thing. It's also a bit tricky.
- Extremely slow computer. This thing is from 2014 with no aftermarket parts, and it shows.
- It's very detrimental to expect that things will go all according to plan on the first try. I had to regroup and rethink things multiple times. Which would have been fine (or at least _more_ fine) if I had truly anticipated this. No amount of reading-about-failure prepares you for failures. You just have to go through it.
