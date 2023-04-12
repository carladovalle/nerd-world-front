import styled from 'styled-components';

export default function Product({ index, name, image, selected, handleSelectProduct }) {

  return (
    <ProductPage>
      <Container selected={selected} index={index} onClick={handleSelectProduct}>
        <img src={image} alt="product" />
        <div className="name">{name}</div>
      </Container>
    </ProductPage>
  );
}

export const ProductPage = styled.div`
  display: flex;
`;

export const Container = styled.div`
  background-color: #ebebeb;
  border-radius: 10px;
  width: 136px;
  height: 224px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 14px;
  margin-left: 15px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.selected ? '#FFEED2' : '#ccc')};
    transform: scale(1.02);
  }
  background-color: ${(props) => (props.selected ? '#FFEED2' : '#ebebeb')};
  img {
    width: 115px;
    height: 109px;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  .name {
    font-size: 15px;
    margin-bottom: 14px;
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 14px;
    font-size: 12px;
    .accommodation,
    .availableRooms {
      h3 {
        font-weight: 700;
        line-height: 14.06px;
        margin-bottom: 3px;
      }
      p {
        line-height: 14.06px;
      }
    }
  }
`;