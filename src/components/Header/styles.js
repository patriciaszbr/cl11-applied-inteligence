import styled from 'styled-components'

export const Container = styled.div`
  height: 100px;
  display: flex;
  background-color: #1a202c;
  box-shadow: 0 0 20px 3px;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
  .logo {
    display: flex;
    margin-left: auto;
    margin-right: auto;
  }
  h1 {
    color: #a600ff;
    margin-left: auto;
    margin-right: auto;
    margin-top: 24px;
  }
  img {
    margin-left: auto;
    margin-right: auto;
  }
`
