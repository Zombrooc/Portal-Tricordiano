import styled from "styled-components";

export const PostListContainer = styled.section`
  width: 580px;
  max-width: 100%;
  margin: 0 auto;
  margin-top: 6.257rem;
  padding: 0 30px;

  @media (max-width: 824px) {
    padding: 0;
  }

  article {
    background: #fff;
    margin-top: 13px;

    & > img,
    & > video {
      width: 100%;
    }

    header {
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .user-info {
        display: flex;
        flex-direction: column;

        span {
          font-size: 13px;

          &.username {
            font-size: 11px;
            color: #666;
            margin-top: 3px;
          }
        }
      }
    }

    footer {
      padding: 20px;

      padding: 20px;
      padding-top: 10px;

      .actions {
        margin-bottom: 8px;

        button {
          background: transparent;
          border: 0;
          cursor: pointer;
          width: auto;
          display: initial;
          padding: 0;
          color: var(--color-dark);
          display: flex;
          align-items: center;
          justify-content: center;

          &.liked {
            color: var(--color-success);

            svg {
              color: var(--color-success) !important;
            }
          }

          svg {
            height: 19px;
            /* margin-right: 12px; */
          }
        }
      }

      p {
        font-size: 13px;
        margin-top: 2px;
        line-height: 18px;

        span {
          color: #7159c1;
          display: block;
        }
      }
    }
  }
`;
