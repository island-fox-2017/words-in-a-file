var sys = require('sys');
const fs = require('fs')

// actual conversion code starts here
function byLength( e1 , e2 ) {
  e1 = e1.toString().length;
  e2 = e2.toString().length;
  return e1<e2 ? 1 : ( e1>e2 ? -1 : 0 );
}

function words_in_a_file(filename, limit) {
  let result = []
  let arrNormalisasi = []
  let fileContent = fs.readFileSync(filename, 'utf8');
  let split = fileContent.replace(/[^a-z0-9]/gmi, " ").replace(/\s+/g, " ").split(' ');

  let sorted = split.sort(byLength)

  for(let i = 0; i < limit; i++){
    result.push(sorted[i])
  }
  return result.join(' ');

}


console.log(words_in_a_file('source.txt', 3));

module.exports = {
  words_in_a_file: words_in_a_file
}
