// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  user: {
    email: '',
  },
};

function addRecord(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'addEmail':
    return {
      ...state,
      user: {
        email: action.payload.email,
      },
    };
  default:
    return state;
  }
}

export default addRecord;
