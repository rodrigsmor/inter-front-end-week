import styled from 'styled-components';

export const DashboardBackground = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.backgroundLight };
`;

export const BodyContainer = styled.main`
    width: 80%;
    display: flex;
    margin-top: 40px;
    justify-content: space-between;

    > div {
        flex: 1;

        & > div {
            margin-bottom: 20px;
        }

        &:nth-child(2) {
            display: flex;
            justify-content: flex-end;
        }
    }
`;

export const InlineTitle = styled.div`
    width: 100%;
    display: flex;
`;

export const InlineContainer = styled.div`
    width: 100%;
    display: flex;
    margin-top: 20px;

    div {
        flex: 4;
        margin-right: 20px;
    }

    button {
        flex: 1;
    }
`;