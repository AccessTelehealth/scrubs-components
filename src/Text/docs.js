/* @flow */

import React from 'react'
import TextString from '!raw!..//Text'
import { parse } from 'react-docgen'
import { Text, Section, } from '../'

const example: React.Element<any> = (
  <Text>Read our <Text blue bold>Terms & Conditions</Text>.</Text>
)

const documentation: Object = parse(TextString)
export default { example, documentation, }
