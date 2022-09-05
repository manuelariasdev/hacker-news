/**
 * @jest-environment jsdom
 */
 import * as React from "react";
 import { ThemeProvider } from 'styled-components'
 import theme from '../../../theme';
 import { render } from '@testing-library/react'
import { Link } from "../../../src/components/Atoms/Link";


describe('Link', () => { 

    test('debe de hacer match con el snapshot Link', () => { 
       const container = render(<ThemeProvider theme={theme}><Link children={<h1></h1>} href={"https://happychasing.substack.com/p/exercising-regularly"} disabled ={false}/></ThemeProvider>)
        expect( container ).toMatchSnapshot();
     })
     
 })