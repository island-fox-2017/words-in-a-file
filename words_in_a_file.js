'use strict'

// var sys = require('sys');
const fs = require('fs')
let file = fs.readFileSync('source.txt', 'utf-8').trim();

// actual conversion code starts here
function words_in_a_file(filename, limit) {
  let textObj = {};
  let textArr = filename.toLowerCase().match(/\b[A-z]+('s)?\b/gi);
  let sorted = [];

  let stopWords = `a, able, about, across, after, all, almost, also, am, among, an, and, any, are, as, at, be, because, been, but, by, can, cannot, could, dear, did, do, does, either, else, ever, every, for, from, get, got, had, has, have, he, her, hers, him, his, how, however, i, if, in, into, is, it, its, just, least, let, like, likely, may, me, might, most, must, my, neither, no, nor, not, of, off, often, on, only, or, other, our, own, rather, said, say, says, she, should, since, so, some, than, that, the, their, them, then, there, these, they, this, tis, to, too, twas, us, wants, was, we, were, what, when, where, which, while, who, whom, why, will, with, would, yet, you, your, ain't, aren't, can't, could've, couldn't, didn't, doesn't, don't, hasn't, he'd, he'll, he's, how'd, how'll, how's, i'd, i'll, i'm, i've, isn't, it's, might've, mightn't, must've, mustn't, shan't, she'd, she'll, she's, should've, shouldn't, that'll, that's, there's, they'd, they'll, they're, they've, wasn't, we'd, we'll, we're, weren't, what'd, what's, when'd, when'll, when's, where'd, where'll, where's, who'd, who'll, who's, why'd, why'll, why's, won't, would've, wouldn't, you'd, you'll, you're, you've, ref`;

  let ignored = stopWords.split(', ');
  let filtered = textArr.filter(input => {
    return  !ignored.includes(input);
  })

  // console.log(filtered);

  for (var i = 0; i <= filtered.length - 1; i++) {
    let word = filtered[i];
    let n = textObj[word];
    if (n === undefined) {
      textObj[word] = 1;
    } else {
      textObj[word]++
    }
  }

  // console.log(text);

  for (var word in textObj) {
    sorted.push([word, textObj[word]])
  }

  sorted = sorted.sort(function(a,b) {
    return b[1] - a[1];
  });

  // console.log(sorted.slice(0, limit));

  let most_freq = {}

  for (var j = 0; j <= limit - 1; j++) {
    let key = sorted[j][0];
    most_freq[key] = sorted[j][1];
  }

  return most_freq
} // ----- end of words_in_a_file -----

console.log(words_in_a_file(file, 3));

module.exports = {
  words_in_a_file: words_in_a_file
}
