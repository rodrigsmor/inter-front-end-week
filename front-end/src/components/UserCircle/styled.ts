import styled from 'styled-components';

export const CircleContainer = styled.div`
    width: 74px;
    height: 74px;
    display: flex;
    font-size: 2rem;
    font-weight: 300;
    margin-right: 20px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.primary };
    border: 1px solid ${({ theme }) => theme.colors.primary };
`;