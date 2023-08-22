import React from 'react';
import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

 export const TransactionHistory = ({ transactions }) => (
  <table className={css.transaction__history}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map(transactions => (
        <tr key={transactions.id}>
          <td>{transactions.type}</td>
          <td>{transactions.amount}</td>
          <td>{transactions.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};