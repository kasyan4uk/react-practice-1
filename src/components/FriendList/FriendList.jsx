import React from "react";
import PropTypes from 'prop-types';
import { FriendsList, Item, Status, Avatar, Name } from './FriendList.styled'

export const FriendList = ({ friend }) => {
    return (
        <FriendsList>
            {friend.map((item, idx) => (
                <Item key={item.id} index={idx}>
                    <Status></Status>
                    <Avatar src={item.avatar} alt="User avatar" width="48"></Avatar>
                    <Name>{item.name}</Name>
                </Item>
            ))}
        </FriendsList>
    )
}


FriendList.propTypes = {
    friend: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    }).isRequired)
}.isRequired;