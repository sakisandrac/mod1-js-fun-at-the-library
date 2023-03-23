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
    library.shelves.fiction.push(book)
  } else if(book.genre === 'nonFiction'){
    library.shelves.nonFiction.push(book)
  }
}

function checkoutBook(library, title, genre){
  if(genre === 'fantasy'){
    for (let i=0; i < library.shelves.fantasy.length; i++){
      if(library.shelves.fantasy[i].title.includes(title)){
        var index = library.shelves.fantasy.indexOf(title);
        library.shelves.fantasy.splice(index, 1);
        return `You have now checked out ${title} from the ${library.name}.`
      }
      } return `Sorry, there are currently no copies of ${title} available at the Denver Public Library.`;
  } 
  if(genre === 'fiction'){
    for (let i=0; i < library.shelves.fiction.length; i++){
      if(library.shelves.fiction[i].title.includes(title)){
        var index = library.shelves.fiction.indexOf(title);
        library.shelves.fiction.splice(index, 1);
        return `You have now checked out ${title} from the ${library.name}.`
      } 
    } return `Sorry, there are currently no copies of ${title} available at the Denver Public Library.`;
  } 
  if(genre === 'nonFiction'){
    for (let i=0; i < library.shelves.nonFiction.length; i++){
      if(library.shelves.nonFiction[i].title.includes(title)){
        var index = library.shelves.nonFiction.indexOf(title);
        library.shelves.nonFiction.splice(index, 1);
        return `You have now checked out ${title} from the ${library.name}.`
      }
    } return `Sorry, there are currently no copies of ${title} available at the Denver Public Library.`;
  } 
  return `Sorry, there are currently no copies of ${title} available at the Denver Public Library.`;
}



module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  // takeStock
};