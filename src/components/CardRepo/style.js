import styled from 'styled-components'

export const CardContainerRepo = styled.div`
  background-color: ${props => props.color};
  color: #fff;
  width: 30%;
  min-width: 20rem;
  margin: auto;
  margin-top: 1rem;
  padding: 1.5rem;
  border: 1px solid #333;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.4s;
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .card-info-repos {
    display: flex;
    flex-direction: column;
    font-size: 1.3rem;
    span {
      font-weight: bold;
    }
  }
  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
`
