/* @flow */

import React from 'react'
import HeadingString from '!raw!scrubs-components/Heading'
import { parse, } from 'react-docgen'
import { Heading, } from 'scrubs-components'

const example: React.Element<any> = (
  <Heading>
    Diagnosis
  </Heading>
)

const documentation: Object = parse(HeadingString)
export default { example, documentation, }
