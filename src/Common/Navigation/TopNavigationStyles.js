import styled from "styled-components";

import { Box } from '@mui/material'


export const TopNavContainer = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 20;
  height: 56px;
  transition: background 0.15s ease-out;

  &.scrolled {
    background-color: rgba(245,245,245,1);
  }

  .MuiToolbar-root {
    display: flex;
    justify-content: flex-end;
  }
`