import PropTypes from 'prop-types';
import {
  TransactionsHistory,
  Head,
  HeadTitle,
  Body,
  TableData,
  TableRow,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionsHistory>
      <Head>
        <tr>
          <HeadTitle>Type</HeadTitle>
          <HeadTitle>Amount</HeadTitle>
          <HeadTitle>Currency</HeadTitle>
        </tr>
      </Head>

      <Body>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <TableData>{type}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
          </TableRow>
        ))}
      </Body>
    </TransactionsHistory>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
