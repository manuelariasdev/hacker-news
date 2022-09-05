/**
 * @jest-environment jsdom
 */
 import * as React from "react";
 import theme from '../../../theme';
 import { render, screen } from '@testing-library/react'
 import {StyledCarcass } from "../../../src/components/Atoms/Carcass"
 
 describe('Title <Title/>', function () {
 
       test('debe de hacer match con el snapshot', () => {
           
         const {container} = render(<StyledCarcass theme={theme}/>)
         expect( container ).toMatchSnapshot();
         })
    
 });