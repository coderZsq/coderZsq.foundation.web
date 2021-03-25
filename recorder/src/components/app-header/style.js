import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 65px;

  .left {
    display: flex;
    align-items: center;

    .brand {
      text-align: center;

      font-size: 30px;
      width: 120px;
    }

    .greeting {
      text-align: center;

      border-left: 1px solid #333;
      margin-top: 4px;
      font-size: 14px;
      width: 120px;
    }
  }

  .right {
    text-align: center;

    width: 32px;
    height: 32px;
    line-height: 32px;
    margin-right: 15px;
    border-radius: 100%;
    border: 1px solid #333;
  }
`;
