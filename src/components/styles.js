import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #000;
  color: #fff;
  width: 100%;
`;

export const LeftSection = styled.div`
  background-color: white;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  
  button {
    background-color: #fbfbfb;
    color: #000;
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    border-radius: .375rem;
  }
    button:hover {
  background-color: #efefef;
  color:  #000;
}
`;

export const MainSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  padding: 2rem;
`;

export const WelcomeScreen = styled.div`
  text-align: center;

  h2 {
    font-size: 2.5rem;
  }

  p {
    margin: 1rem 0;
    font-size: 1.2rem;
  }

  button {
    background-color: #fff;
    color: #000;
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    border-radius: .375rem;
  }
`;

export const SettingsScreen = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  

  div {
    margin: 1rem 0;
    display: flex;
    flex-direction: column; /* Make sure children are in a column */
    align-items: flex-start; /* Align items to the left */
  }

  label {
    color: black; 
    margin-bottom: 0.5rem; 
    font-weight: bold; 
  }

  input, textarea {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: .375rem;
  }

  button {
    background-color: black;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    width: 150px;
    border-radius: .375rem;
  }
`;

export const DiscardButton = styled.button`
  background-color: white;
  color: red;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin-left: 1rem;
  

  &:hover {
    background-color: #f5f5f5; /* Light gray on hover */
  }
`;

