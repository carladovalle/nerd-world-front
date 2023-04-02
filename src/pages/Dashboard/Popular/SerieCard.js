import styled from 'styled-components';

export default function Serie({ index, name, image, synopsis, selected, handleSelectserie }) {

  return (
    <seriePage>
      <Container selected={selected} index={index} onClick={handleSelectserie}>
        <img src={image} alt="serie" />
        <div className="name">{name}</div>
        <div className="info">
          <div className="synopsis">
            <h3>{synopsis}</h3>
          </div>
        </div>
      </Container>
    </seriePage>
  );
}

export const seriePage = styled.div`
  display: flex;
`;

export const Container = styled.div`
  background-color: #ebebeb;
  border-radius: 10px;
  width: 196px;
  height: 264px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 14px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.selected ? '#FFEED2' : '#ccc')};
    transform: scale(1.02);
  }
  background-color: ${(props) => (props.selected ? '#FFEED2' : '#ebebeb')};
  img {
    width: 168px;
    height: 109px;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  .name {
    font-size: 20px;
    margin-bottom: 14px;
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 14px;
    font-size: 12px;
    .synopsis{
      h3 {
        font-weight: 700;
        line-height: 14.06px;
        margin-bottom: 3px;
      }
    }
  }
`;