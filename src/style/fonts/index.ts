import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @font-face {
        font-family: 'Source Serif Pro';
        src: local('Source Serif Pro'), local('SourceSerifPro'),
        url(https://fonts.googleapis.com/css?family=Source+Serif+Pro),
        font-weight: 300;
        font-style: normal;
    }
`;
