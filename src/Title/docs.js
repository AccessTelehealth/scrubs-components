/* @flow */

import React from 'react'
import TitleString from '!raw!..//Title'
import { parse } from 'react-docgen'
import { Title } from '../'

const Example = (): React.Element<*> => {
  return  <Title>Consultation</Title>
}

const documentation: Object = parse(TitleString)
export default { Example, documentation }
