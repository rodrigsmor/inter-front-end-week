import styled from 'styled-components';

export const ButtonContainer = styled.button`
    width: 100%;
    height: 46px;
    cursor: pointer;
    transition: .5s ease;
    color: ${({ theme }) => theme.colors.background };
    background: ${({ theme }) => theme.colors.primary };
    border: 1px solid ${({ theme }) => theme.colors.primary };
    border-radius: 10px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    z-index: 5000;
    align-items: center;

    &:hover {
        filter: opacity(0.8);
    }

    &::disabled {
        filter: opacity(0.4);
    }
`;