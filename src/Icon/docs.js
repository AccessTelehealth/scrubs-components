/* @flow */

import React from 'react'
import IconString from '!raw!..//Icon'
import { parse } from 'react-docgen'
import { Icon } from '../'

const Example = (): React.Element<*> => {
  return (
    <Icon icon="arrowLeft" size="small" fill="red" />
  )
}

const documentation: Object = parse(IconString)
export default { Example, documentation }
