import styled, { css } from 'styled-components';

export const CardContainer = styled.div<{
    width: string;
    height: string;
    noShadow: boolean;
}>`
    display: flex;
    padding: 20px;
    z-index: 5000;
    align-items: center;
    border-radius: 20px;
    flex-direction: column;
    width: ${( props ) => props.width };
    height: ${( props ) => props.height };
    background: ${({ theme }) => theme.colors.background };
    
    ${( props ) => !props.noShadow && css`
        box-shadow: 5px 4px 6px rgba( 0, 0, 0, 0.25);
    `};
`;