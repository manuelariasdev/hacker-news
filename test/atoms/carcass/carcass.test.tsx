/**
 * @jest-environment jsdom
 */
 import * as React from "react";
 import { ThemeProvider } from 'styled-components'
 import theme from '../../../theme';
 import { render } from '@testing-library/react'
import { Carcass } from "../../../src/components/Atoms/Carcass/Carcass";


describe('carcass', () => { 
    test('debe de hacer match con el snapshot Carcass', () => { 

       const container = render(<ThemeProvider theme={theme}><Carcass height='20px' /></ThemeProvider>)
        expect( container ).toMatchSnapshot();
     })
     
 })