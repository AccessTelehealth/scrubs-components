/* @flow */

import React from 'react'
import HeadingString from '!raw!..//Heading'
import { parse } from 'react-docgen'
import { Heading } from '../'

const Example = (): React.Element<*> => {
  return <Heading>Diagnosis</Heading>
}

const documentation: Object = parse(HeadingString)
export default { Example, documentation }
