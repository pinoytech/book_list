export function selectBook(book) {
  // console.log('a book has been selected', book.title);
  // selectBook is an Action Creator. It needs to return an action,
  // an object with a type property(usually uppercase). If not, you will receive the following error
  // Uncaught Error: Actions may not have an undefined "type" property. Have you misspelled a constant?
  // It sometimes contain a payload
  return {
    return: 'BOOK_SELECTED',
    payload: book
  };
}