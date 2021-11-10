import styled from "styled-components";

export const HomePageContainer = styled('div')`
  .mainAppBar {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
  .mainBox {
    display: flex;
    flex-wrap: wrap;
    width: calc(100% - 2rem);
    > .paper {
      padding: 2rem;
      width: 100%;
      min-height: 100%;
      border-radius: 2rem;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;

      .title {
        font-weight: 900;
      }
      .amount {
        font-weight: 900;
        margin-bottom: 0.5rem;
      }
      .label {
        color: #9c9c9c;
      }
      .value {
        font-weight: bold;

        &.spacedBottom {
          margin-bottom: 0.5rem;
        }
      }
    }
  }
  .transactionBox {
    padding: 2rem;
    .title {
      margin-bottom: 0.5rem;
    }
    .transactionItem {
      padding: 1rem;
      &:not(:last-of-type) {
        margin-bottom: 1rem;
      }
      .transactionSub {
        font-weight: 900;
        color: #9c9c9c;
        margin-bottom: 0.5rem;
      }
    }
    .transactionListItem {
      &:not(:last-of-type) {
        margin-bottom: 1rem;
      }
      .detailsColumn {
        .name {
          font-weight: 900;
        }
        .accountNumber {
          color: #9c9c9c;
        }
      }

      .valueColumn {
        display: flex;
        justify-content: flex-end;

        .amount {
          font-weight: bold;
          &.negative {
            color: #ff686b;
          }
          &.positive {
            color:#0DC83F;
          }
        }
      }
    }
  }

  .bottomNavigation {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    .bottomButton {
      font-size: 1rem;
      width: calc(100% - 2rem);
      background-color: #0f0f0f;
      border-radius: 4rem;
      color: #fff;
      padding: 0.5rem;
      text-transform: unset;
    }
  }
  
  .paper {
    border-radius: 1rem;
    box-shadow: 0 0 1rem 0.15rem rgba(0,0,0,0.15);
  }
`