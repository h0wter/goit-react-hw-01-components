import styled from 'styled-components';

export const UserProfile = styled.div`
  border-radius: 5px;
  width: 250px;
  margin: 50px auto;
  padding-top: 10px;
  background-color: #ffffff;
`;

export const Description = styled.div`
  text-align: center;
`;

export const Avatar = styled.img`
  width: 110px;
  height: 110px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 10px;
`;

export const Tag = styled.p`
  color: #8e959e;
  font-weight: 500;
  padding-bottom: 10px;
`;

export const Location = styled(Tag)`
  padding-bottom: 30px;
`;

export const Stats = styled.ul`
  display: flex;
  background-color: #f3f6f9;
  border-radius: 0 0 5px 5px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
  border-top: 1px solid #dfe3e8;
  border-right: 1px solid #dfe3e8;

  &:last-child {
    border-right: none;
  }
`;

export const Label = styled.span`
  color: #8e959e;
  padding-bottom: 5px;
`;

export const Quantity = styled.span`
  font-weight: 700;
  color: #1f3349;
  margin-bottom: 5px;
`;
