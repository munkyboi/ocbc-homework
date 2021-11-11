import styled from "styled-components";

export const HomePageContainer = styled('div')`
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
      background-image: url('/images/amount-bg.jpg');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: bottom right;
    }

    .title {
      font-weight: 900;
    }
    .amount {
      font-weight: 900;
      margin-bottom: 0.5rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .symbol {
        font-size: 1rem;
        color: #9c9c9c;
        margin-right: 0.25rem;
      }
    }
    .label {
      color: #9c9c9c;
    }
    .value {
      font-weight: bold;

      &.spacedBottom {
        margin-bottom: 0.5rem;
      }

      &.username {
        text-transform: capitalize;
      }
    }
  }

  .transactionBox {
    padding: 2rem;
    min-height: calc(calc(var(--vh, 1vh) * 100) - 244px - 56px - 4rem - var(--bottomNavHeight));
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
          text-transform: capitalize;
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
`