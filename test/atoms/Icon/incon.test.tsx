/**
 * @jest-environment jsdom
 */
 import * as React from "react";
 import { ThemeProvider } from 'styled-components'
 import theme from '../../../theme';
 import { render } from '@testing-library/react'
import { Icon } from "../../../src/components/Atoms/Icon";


describe('Icon', () => { 
    const width = 30;
    const heigth = 30;
    test('debe de hacer match con el snapshot Icon', () => { 
       const container = render(<ThemeProvider theme={theme}><Icon name='angular' width={width} heigth={heigth} /></ThemeProvider>)
        expect( container ).toMatchSnapshot();
     })
 })