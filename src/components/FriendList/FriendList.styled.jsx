import styled from "@emotion/styled";

export const FriendsList = styled.ul`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0;
`;

export const Item = styled.li`
display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 200px;
`;

export const Status = styled.span`  
  width: 10px;
  height: 10px;
  border-radius: 50%;
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