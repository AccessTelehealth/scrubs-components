/* @flow */

import React from 'react'
import { Back } from '../'
import BackString from '!raw!..//Back'
import { parse } from 'react-docgen'

const Example = (): React.Element<*> => {
  return <Back />
}

const documentation: Object = parse(BackString)
export default { Example, documentation }
