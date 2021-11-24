import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: ${props => props.color};
  width: 30%;
  margin: auto;
  margin-top: 1rem;
  padding: 1.5rem;
  border: 1px solid #333;
  border-radius: 5px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  transition: 0.4s;
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .card-info {
    display: flex;
    flex-direction: column;
    font-size: 1.3rem;
    span {
      text-align: left;
      font-weight: bold;
    }
  }
  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
`
