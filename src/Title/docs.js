/* @flow */

import React from 'react'
import TitleString from '!raw!scrubs-components/Title'
import { parse, } from 'react-docgen'
import { Title, } from 'scrubs-components'

const example: React.Element<any> = (
  <Title>Consultation</Title>
)

const documentation: Object = parse(TitleString)
export default { example, documentation, }
