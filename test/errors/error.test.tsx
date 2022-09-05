/**
 * @jest-environment jsdom
 */
import * as React from "react";
import { ThemeProvider } from 'styled-components'
import { render, screen } from '@testing-library/react'
import theme from '../../theme';
import { Error } from '../../src/components/errors'
describe('Error <Error/>', function () {

    test('debe de hacer match con el snapshot Error', () => {
        const {container} = render(<ThemeProvider theme={theme}><Error /> </ThemeProvider>)
        expect( container ).toMatchSnapshot();
     })

     test('debe de mostrar BAD', () => {

        render(<ThemeProvider theme={theme}><Error /> </ThemeProvider>)
        expect(screen.getByText('BAD BAD BAD BAD BAD')).toBeTruthy();
        
     })
  

});