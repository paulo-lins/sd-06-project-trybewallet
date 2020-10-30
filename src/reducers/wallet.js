const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'WALLET_INPUT':
    return {
      ...state,
      currencies: state.wallet.currencies.concat(action.currencies),
      expenses: state.wallet.expenses.concat(action.expenses),
    };
  case 'RESET':
    return INITIAL_STATE;
  default:
    return state;
  }
}
