/**
 * @jest-environment jsdom
 */
import * as React from "react";
import { ThemeProvider } from 'styled-components'
import theme from '../../../theme';
import { render } from '@testing-library/react'
import { Title } from '../../../src/components/Atoms/Title/Title';

describe('Title <Title/>', function () {


        test('debe de hacer match con el snapshot Title', () => {
          
            const {container} = render(<ThemeProvider theme={theme}><Title font="secondary" size = 'md' /> </ThemeProvider>)
            expect( container ).toMatchSnapshot();
         })
      
   
});