const getRandId = () => {
  const randFloat = Math.random() * (100 - 0) + 0;
  return Math.floor(randFloat);
};

const initialState = [
  { bookId: getRandId(), title: 'Hello World', category: 'Programming' },
  { bookId: getRandId(), title: 'Hello Redux', category: 'JavaScript' },
];

function books(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'CREATE_BOOK':
      return [...state, payload];
    case 'REMOVE_BOOK':
      return state.filter((book) => book.bookId !== payload.bookId);
    default:
      return state;
  }
}

export default books;
