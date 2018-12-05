// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function calculateLevelParams(currentLvl, n) {
	return {
	  /**
		   * The first thing I figured when tackling this problem was how to find
		   * the parameters for each level of the pyramid
		   * (what's the row length and how many hashes should there be)
		   *
		   * @param hashesCount: the number of hashes in each line is always equal to the current level number plus itself minus one
		   * ex: for the first level: 1 + (1 - 1) = 1 hash
		   * level 5: 5 + (5 - 1) = 9
		   */
	  hashesCount: currentLvl + (currentLvl - 1),
	  /**
		   * @param currRowLength: (current row length) the row length should be equal for every level, and it is based on the length
		   * of the base level of the pyramid, so that's what needs to be calculated.
		   * Based on the examples on the problem description, I figured that it was (N + (N - 1))
		   * N = 1; 1 + (1 - 1) = 1 === '#' base of the pyramid
		   * N = 3; 3 + (3 - 1) = 5 === '#####' base of the pyramid
		   * N = 5; 5 + (5 - 1) = 9 === '#########' base of the pyramid
		   */
	  currRowLength: n + (n - 1),
	};
  }
  
  function buildLevelContent(currRowLength, hashesCount) {
	// calculates the number of empty spaces that go into each side of the hashes
	const padding = Math.ceil((currRowLength - hashesCount) / 2);
	// insert hashes into the level content
	let row = ''.padEnd(hashesCount, '#');
	// insert empty spaces into each side of the content
	row = row.padStart(padding + row.length, ' ');
	row = row.padEnd(padding + row.length, ' ');
	return row;
  }
  
  function buildLevel(n, lvl = 0) {
	// if the desired level has been achieved, return
	if (n === lvl) return;
  
	// currentLvl is the level being built
	const currentLvl = lvl + 1;
  
	const { hashesCount, currRowLength } = calculateLevelParams(currentLvl, n);
  
	// if the number of hashes is the same as the line size,
	// then this is the base of the pyramid, so print and return
	if (currRowLength === hashesCount) {
	  // insert hashes into the level content
	  console.log(''.padEnd(currRowLength, '#'));
	  return;
	}
  
	const levelContent = buildLevelContent(currRowLength, hashesCount);
	console.log(levelContent);
  
	// recursion
	buildLevel(n, currentLvl);
  }
  
  function pyramid(n) {
	buildLevel(n);
  }
  
  module.exports = pyramid;
  