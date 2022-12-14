import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 500px;
  margin-left: 20px;
  margin-top: 20px;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #99a5cc96;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

export const H2 = styled.h2`
  font-size: 26px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #580505
`;

export const Button = styled.button`
  font-size: 18px;
  margin-right: 10px;
  padding: 5px 10px;
  text-transform: uppercase;
  font-weight: 700;
  width: 150px;
  height: 40px;
  background-color: #8e8ebb99;
  color: #394545;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
`;

export const Span = styled.span`
  color: #000c12;
  margin-top: 20px;
  font-size: 20px;

`;
