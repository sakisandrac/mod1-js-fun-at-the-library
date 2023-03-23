function createTitle(titleName) {
  let title = `The ${titleName}`;
  return title;
}

function buildMainCharacter(name, age, pronouns){
  let mainCharacter = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return mainCharacter
}

// add reviews to an array with a review already in it
// be able to return new array, then push into that new aray again
// check if the review is like any other in the array already
// loop through the array to check
// if review is unique, add to the array

//remove the array i created because the test already creates one i just need to push into it

//this pases all but the 2nd test 
function saveReview(review, reviews){
    if(!reviews.includes(review)){
      reviews.push(review);
      return reviews;
    }
}

function calculatePageCount(title){
  return title.length * 20;
}

// the test already runs the createTitle and createMainCharacter function for me, just have to add those as the params

function writeBook(bookTitle, bookCharacter, genre){
 let newBook = {
  title: bookTitle,
  mainCharacter: bookCharacter,
  pageCount: calculatePageCount(bookTitle),
  genre: genre
 }
 return newBook
}

function editBook(book){
  return book.pageCount = book.pageCount * .75;
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}