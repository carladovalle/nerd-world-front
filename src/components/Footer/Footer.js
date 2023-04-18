import styled from 'styled-components';

export function Footer() {
  return(
    <Wrapper>
      <h1>Nerd World</h1>
      <p><span>Contato: </span>nerd-universe@geek.com</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 100vw;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Raleway', sans-serif;
  
  background: #343a40;
  background-position: center;
  background-size: cover;
  h1, p {
    color:  #F5FAD1;
    opacity: .7;
  }
  h1 {
    text-align: center;
    font-size: 24px;
    padding-bottom: 20px;
    font-weight: 500;
  }
  p {
    font-size: 12px;
  }
  span {
    font-weight: bold;
  }
`;