/* @flow */

import React from 'react'
import MastheadString from '!raw!..//Masthead'
import { parse } from 'react-docgen'
import { Masthead, Headline, Byline, } from '../'

const example: React.Element<any> = (
  <Masthead>
    <Headline>Consultation with Dr Mark Edmin</Headline>
    <Byline>{'28 April 2016 9:20am'}</Byline>
  </Masthead>
)

const documentation: Object = parse(MastheadString)
export default { example, documentation, }
