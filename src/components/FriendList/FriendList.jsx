import PropTypes from 'prop-types';
import { FriendsList, Item, Status, Avatar, Name } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Item key={id}>
          <Status isOnline={isOnline} />
          <Avatar src={avatar} alt="User avatar" width="48" />
          <Name>{name}</Name>
        </Item>
      ))}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
