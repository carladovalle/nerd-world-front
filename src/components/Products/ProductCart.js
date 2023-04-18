import styled from 'styled-components';

export function ProductCart () {
  
  return (
    <Wrapper>
      <div>
        <img alt="" />
      </div>
      <InfoContainer>
        <Title>
          <h3>nome do produto</h3>
          <span>quantidade</span>
        </Title>
            
      </InfoContainer>
              
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 0;
  gap: 10px;
  border-bottom: 1px solid rgba(118, 195, 82, .5);
  
  img {
    width: 90px;
    height: 100px;
    border-radius: 5px;
  }
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const Title = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  text-align: start;
  h3 {
    font-weight: 500;
    line-height: 20px;
  }
  
  span {
    font-size: 13px;
    line-height: 16px;
    opacity: .7;
  }
`;
