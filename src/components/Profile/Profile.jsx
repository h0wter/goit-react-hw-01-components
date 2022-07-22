import PropTypes from 'prop-types';
import {
  UserProfile,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <UserProfile>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag className="tag">@{tag}</Tag>
        <Location className="location">{location}</Location>
      </Description>

      <Stats>
        <StatsItem>
          <Label className="label">Followers</Label>
          <Quantity className="quantity">{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity className="quantity">{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label className="label">Likes</Label>
          <Quantity className="quantity">{stats.likes}</Quantity>
        </StatsItem>
      </Stats>
    </UserProfile>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
