import styled from 'styled-components';

export const FriendsList = styled.ul`
  margin-bottom: 50px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  width: 300px;
  padding: 5px;
  margin: 0 auto;
  margin-bottom: 10px;
  box-shadow: 0 1px 4px #000, -23px 0 20px -23px rgb(0 0 0 / 80%),
    23px 0 20px -23px rgb(0 0 0 / 80%), inset 0 0 40px rgb(0 0 0 / 10%);
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Status = styled.span`
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-left: 5px;
`;

export const Avatar = styled.img`
  margin-left: 5px;
`;

export const Name = styled.p`
  font-weight: 500;
  margin-left: 5px;
`;
