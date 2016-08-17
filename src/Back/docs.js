/* @flow */

import React from 'react'
import { Back, } from '../'
import BackString from '!raw!..//Back'
import { parse } from 'react-docgen'

const example: React.Element<any> = (
  <Back />
)

const documentation: Object = parse(BackString)
export default { example, documentation, }
