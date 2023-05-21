import styled from "@emotion/styled";

export const FriendsList = styled.ul`
width: 400px;
`;

export const Item = styled.li`
display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const Status = styled.span`  
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-left: auto;
`;

export const Avatar = styled.img`
    width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Name = styled.p`
font-weight: bold;
`;