import styled from 'styled-components';

export const TransactionsHistory = styled.table`
  background-color: #ffffff;
  border-radius: 5px;
  margin: 0 auto 50px;
  border-collapse: collapse;
  box-shadow: 0 1px 4px #000, -23px 0 20px -23px rgb(0 0 0 / 80%),
    23px 0 20px -23px rgb(0 0 0 / 80%), inset 0 0 40px rgb(0 0 0 / 10%);
`;

export const Head = styled.thead`
  background-color: #00bcd5;
`;

export const HeadTitle = styled.th`
  font-weight: 500;
  color: #ffffff;
  width: 240px;
  padding: 10px 0;
  &:not(:last-child) {
    border-right: 1px solid #ffffff;
  }
`;

export const Body = styled.tbody`
  text-align: center;
  text-transform: capitalize;
  font-weight: 300;
`;

export const TableRow = styled.tr`
  &:nth-last-child(2n + 1) {
    background-color: #ecf1f3;
  }
`;

export const TableData = styled.td`
  padding: 10px 0;
  &:not(:last-child) {
    border-right: 1px solid #cccccc;
  }
`;
