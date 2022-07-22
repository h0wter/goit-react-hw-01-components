import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistic = styled.section`
  width: 340px;
  margin: 0 auto 50px;
  border-radius: 3px;
  background-color: #fff;
`;

export const Title = styled.h2`
  font-weight: 500;
  margin: 0;
  padding: 35px 0;
  text-align: center;
  color: #8d9297;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  flex-wrap: wrap;
  width: 68px;
  padding: 10px 10px;
  justify-content: center;
  color: #fff;
  background-color: ${getRandomHexColor};
`;

export const Label = styled.span`
  display: block;
  font-size: 12px;
  width: 100%;
  text-align: center;
  padding-bottom: 5px;
`;

export const Percentage = styled.span`
  font-size: 20px;
`;
