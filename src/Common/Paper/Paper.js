import cn from 'classnames'
import React from 'react'
import { StyledPaper } from './PaperStyles'

const Papyrus = (props) => {
  const { className, children } = props
  return (
    <StyledPaper className={cn({
        [`${className}`]: className
      })}
    >
      {children}
    </StyledPaper>
  )
}

export default React.memo(Papyrus)
