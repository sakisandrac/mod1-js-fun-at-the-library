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
    for (var i=0; i < library.shelves.fantasy.length; i++){
      if(library.shelves.fantasy[i].title.includes(title)){
        library.shelves.fantasy.splice(i, 1);
        return `You have now checked out ${title} from the ${library.name}.`
      }
      } return `Sorry, there are currently no copies of ${title} available at the ${library.name}.`;
  } 
  if(genre === 'fiction'){
    for (var i=0; i < library.shelves.fiction.length; i++){
      if(library.shelves.fiction[i].title.includes(title)){
        library.shelves.fiction.splice(i, 1);
        return `You have now checked out ${title} from the ${library.name}.`
      } 
    } return `Sorry, there are currently no copies of ${title} available at the ${library.name}.`;
  } 
  if(genre === 'nonFiction'){
    for (var i=0; i < library.shelves.nonFiction.length; i++){
      if(library.shelves.nonFiction[i].title.includes(title)){
        library.shelves.nonFiction.splice(i, 1);
        return `You have now checked out ${title} from the ${library.name}.`
      }
    } return `Sorry, there are currently no copies of ${title} available at the ${library.name}.`;
  } 
  return `Sorry, there are currently no copies of ${title} available at the ${library.name}.`;
}

function takeStock(library, genre){
  if(genre === 'fantasy'){
    var stock = library.shelves.fantasy.length
    return `There are a total of ${stock} ${genre} books at the ${library.name}.`
  } 
  if(genre === 'fiction'){
    var stock = library.shelves.fiction.length
    return `There are a total of ${stock} ${genre} books at the ${library.name}.`
  }
  if(genre === 'nonFiction'){
    var stock = library.shelves.nonFiction.length
    return `There are a total of ${stock} ${genre} books at the ${library.name}.`
  }
  var stock = library.shelves['fantasy'].length + library.shelves['fiction'].length + library.shelves['nonFiction'].length
  return `There are a total of ${stock} books at the ${library.name}.`
}


module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};