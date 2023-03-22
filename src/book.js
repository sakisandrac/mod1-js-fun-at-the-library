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

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}