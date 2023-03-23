function shelfBook(book, shelf){
  if (shelf.length !== 3){
  shelf.unshift(book)
  }
}

function unshelfBook(name, shelf){
  for (var i=0; i < shelf.length; i++)
  if (shelf[i].title.includes(name) && name === shelf[i].title){
    shelf.splice(i, 1);
    return shelf
  }
 }


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  // searchShelf
};