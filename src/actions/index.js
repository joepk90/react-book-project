export function selectBook(book) {
  console.log('A book has been selected', book.title);
// SelectBook is an ActionCreator, it needs to return an action,
// an object with a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };

}
