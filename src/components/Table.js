import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends React.Component {
  render() {
    const headerTable = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
      'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            { headerTable.map((hTable) => <th key={ hTable }>{ hTable }</th>) }
          </tr>
        </thead>
        <thead>
          { expenses.map((expense) => {
            const { currency, exchangeRates } = expense;
            const valorDespesa = expense.value;
            const nomeMoeda = exchangeRates[currency].name;
            const nomeMoedaConversao = 'Real';
            const cambio = parseFloat(exchangeRates[currency].ask);
            return (
              <tr key={ expense.id }>
                <td>{ expense.description }</td>
                <td>{ expense.tag }</td>
                <td>{ expense.method }</td>
                <td>{ valorDespesa }</td>
                <td>{ nomeMoeda }</td>
                <td>{ cambio.toFixed(2) }</td>
                <td>{ (valorDespesa * cambio).toFixed(2) }</td>
                <td>{ nomeMoedaConversao }</td>
              </tr>
            );
          })}
        </thead>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(
  mapStateToProps,
)(Table);
