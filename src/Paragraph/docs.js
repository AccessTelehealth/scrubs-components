/* @flow */

import React from 'react'
import ParagraphString from '!raw!..//Paragraph'
import { parse } from 'react-docgen'
import { Paragraph, } from '../'

const example: React.Element<any> = (
  <Paragraph>
    Patient has webbed feet and should seek further medical attention.
  </Paragraph>
)

const documentation: Object = parse(ParagraphString)
export default { example, documentation, }
