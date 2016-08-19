/* @flow */

import React from 'react'
import ItemString from '!raw!..//Item'
import { parse } from 'react-docgen'
import { Label } from '../'

const Example = (): React.Element<*> => {
  return <Label text={'I am a label'} />

}

const documentation: Object = parse(ItemString)
export default { Example, documentation }
