/**
 * @jest-environment jsdom
 */
 import * as React from "react";
 import { ThemeProvider } from 'styled-components'
 import theme from '../../../theme';
 import { render } from '@testing-library/react'
import { IconButton } from "../../../src/components/Atoms/IconButton";


describe('IconButton', () => { 
    test('debe de hacer match con el snapshot IconButton', () => { 
       const container = render(
       <ThemeProvider theme={theme}>
         <IconButton 
          active={true} 
          children={<h1></h1> } 
          isData='yes' 
          shape='circle'
          />
        </ThemeProvider>)
        expect( container ).toMatchSnapshot();
     })
 })