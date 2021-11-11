import React from 'react'

// STYLES
import { Container } from './ContentContainerStyles'

const MainContainer = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export default React.memo(MainContainer)
