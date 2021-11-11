import styled from 'styled-components'

export const TransferPageContainer = styled('div')`
  .form {
    padding: 2rem;
    position: relative;
  }

  .spinny {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,0.5);
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`