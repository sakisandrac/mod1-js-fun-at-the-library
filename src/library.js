function createLibrary(name){
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return library;
}

function addBook(library, book){
  if(book.genre === 'fantasy'){
    library.shelves.fantasy.push(book)
  } else if(book.genre === 'fiction'){
    ibrary.shelves.fiction.push(book)
  } else if(book.genre === 'nonFiction'){
    library.shelves.nonFiction.push(book)
  }
}



module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  // takeStock
};