function shelfBook(book, shelf){
  if (shelf.length !== 3){
  shelf.unshift(book);
  }
}

function unshelfBook(name, shelf){
  for (var i=0; i < shelf.length; i++)
  if (shelf[i].title.includes(name) && name === shelf[i].title){
    shelf.splice(i, 1);
    return shelf;
  }
 }

//  function listTitles(shelf){
//   for (var i=0; i < shelf.length; i++){  
//     shelf[i].title
//   } 
// }

function listTitles(shelf){
  var titles = shelf.map(function(book){
    return book.title
  })
  return titles.join(", ");
}

function searchShelf(shelf, title){
  for (var i=0; i < shelf.length; i++)
  if (shelf[i].title.includes(title)){
    return true
  } return false
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};