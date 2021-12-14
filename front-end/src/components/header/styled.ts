import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    height: 90px;
    background-color: ${({ theme }) => theme.colors.background };
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HeaderWrapper = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        display: grid;

        span {
            margin: 0 0 0 5px;
        }
    }
`;