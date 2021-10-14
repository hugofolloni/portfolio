import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        background-image: radial-gradient(circle , ${({ theme }) => theme.backgroundCenter }, ${({ theme }) => theme.backgroundEnd });
        color: ${({ theme }) => theme.color };
    }

    .setTheme-button {
        filter: ${({ theme }) => theme.filter };
    }

    .setTheme-button:hover {
        filter: ${({ theme }) => theme.sunHover };
    }

    .header{
        background-color: ${({ theme }) => theme.containerBackground };
    }

    .header .right a {
        color: ${({ theme }) => theme.color };
    }

    .home {
        background-color: ${({ theme }) => theme.containerBackground };
    }

    .content{
        background-color: ${({ theme }) => theme.containerBackground };
    }

    .project{
        background-color: ${({ theme }) => theme.backgroundCenter };
    }

    .home  .description h3 {
        color: ${({ theme }) => theme.descriptionColor };
    }

    .content-item img {
        filter: ${({ theme }) => theme.filter };
    }

    .social-medias-links img {
        filter: ${({ theme }) => theme.filter };
    }

    .home .title {
        color: ${({ theme }) => theme.homeTitle };
    }

    .project:hover {
        box-shadow: ${({ theme }) => theme.projectBoxShadow };
    }

    .form input, .form textarea {
        background-color: ${({ theme }) => theme.inputBackground };
        color: ${({ theme }) => theme.color };

    }

`