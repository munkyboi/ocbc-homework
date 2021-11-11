import styled from "styled-components";

export const BottomNavContainer = styled('div')`
  position: sticky;
  bottom: 0;
  left: 0;
  width: calc(100% - 4rem);
  padding: 2rem;
  background-image: linear-gradient(to top, rgba(245,245,245,1), rgba(245,245,245,0));
  .bottomButton {
    font-size: 1.25rem;
    width: calc(100%);
    border-radius: 4rem;
    /* background-color: #0f0f0f;
    color: #fff; */
    padding: 0.5rem;
    text-transform: uppercase;
    letter-spacing: -0.05rem;
    font-weight: 900;

    &:not(:last-of-type) {
      margin-bottom: 0.5rem;
    }

    .buttonLoader {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 10;
      background-color: rgba(255,255,255,0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`