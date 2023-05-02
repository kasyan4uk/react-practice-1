import styled from "@emotion/styled";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);`;

export const Description = styled.div``;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 0;`;

export const Tag = styled.p`
  color: #aaa;
  margin: 5px 0;`;

export const Location = styled.p`
  margin: 5px 0;`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  list-style: none;
  margin: 20px 0 0 0;
  padding: 0;`;

export const StatsList = styled.li`
  text-align: center;`;

export const Label = styled.span`
  color: #aaa;
  font-size: 14px;
  text-transform: uppercase;`;

export const Quantity = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin: 5px 0;`;
