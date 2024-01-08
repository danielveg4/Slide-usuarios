import styled from 'styled-components';

const StyledButtonprevius = styled.div`
  width: 200px;
  height: 30px;
  border-radius: 0.8rem;
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: bold;
  color: black;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;  
  transition: background-color 0.2s, color 0.2s;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export default StyledButtonprevius;