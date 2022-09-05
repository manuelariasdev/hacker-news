/**
 * @jest-environment jsdom
 */
 import * as React from "react";
 import { ThemeProvider } from 'styled-components'
 import theme from '../../../theme';
 import { render } from '@testing-library/react'
import { Spinner } from "../../../src/components/Atoms/Spinner";


describe('Spinner', () => { 

    test('debe de hacer match con el snapshot Spinner', () => { 
       const container = render(<ThemeProvider theme={theme}><Spinner /></ThemeProvider>)
        expect( container ).toMatchSnapshot();
     })
     
 })