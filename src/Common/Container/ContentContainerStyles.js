import styled from "styled-components"

export const Container = styled('div')`
  min-height: calc(calc(var(--vh, 1vh) * 100) - 64px - var(--bottomNavHeight));
  background-image: url('/images/clean-bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  padding-top: calc(64px + 0rem);
  padding-bottom: var(--bottomNavHeight);
`