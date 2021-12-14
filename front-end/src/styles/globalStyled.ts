import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-size: 16px;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: ${({ theme }) => theme.colors.background};
    }
    
    input, button, textarea, select {
        font-family: 'Roboto', sans-serif;
    }
    
    input:focus, textarea:focus, select:focus{
        outline: none;
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.primary};

        &:hover {
          filter: opacity(0.8)
        }
    }

    .primary-color{
        color: ${({ theme }) => theme.colors.primary};
    }

    .font-bold{
        font-weight: 700;
    }

    .h2{
        color: #000000;
        font-weight: 600;
        font-size: 1.5rem;
        line-height: 28px;
    }

    .wallet{
        font-weight: 500;
        font-size: 2.5rem; //40px
        line-height: 47px;
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export default GlobalStyled;