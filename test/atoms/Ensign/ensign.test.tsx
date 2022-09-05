/**
 * @jest-environment jsdom
 */
 import * as React from "react";
 import { ThemeProvider } from 'styled-components'
 import theme from '../../../theme';
 import { render } from '@testing-library/react'
import { Ensign } from "../../../src/components/Atoms/Ensign";


describe('Ensign', () => { 
    test('debe de hacer match con el snapshot Ensign', () => { 

       const container = render(<ThemeProvider theme={theme}><Ensign children={<h1></h1>} /></ThemeProvider>)
        expect( container ).toMatchSnapshot();
        
     })
 })