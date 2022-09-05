/**
 * @jest-environment jsdom
 */
 import * as React from "react";
 import { ThemeProvider } from 'styled-components'
 import theme from '../../../theme';
 import { render } from '@testing-library/react'
import { Text } from "../../../src/components/Atoms/Text";


describe('Text', () => { 

    test('debe de hacer match con el snapshot Spinner', () => { 
       const container = render(<ThemeProvider theme={theme}><Text children={<span></span>} lineHeight='lg' size='md'/></ThemeProvider>)
        expect( container ).toMatchSnapshot();
     })
     
 })