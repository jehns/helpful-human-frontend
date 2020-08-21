import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('Font Name'), local('FontName'),
        url(https://fonts.googleapis.com/css?family=Source+Serif+Pro),
        font-weight: 300;
        font-style: normal;
    }
`;
