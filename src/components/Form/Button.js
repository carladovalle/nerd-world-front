import styled from 'styled-components';

export default function Button({ variant='contained', children, ...props }) {
  return (
    <StyledMuiButton variant={variant} {...props}>
      {children}
    </StyledMuiButton>
  );
}

const StyledMuiButton = styled.button`
  margin-top: 10px !important;
`;