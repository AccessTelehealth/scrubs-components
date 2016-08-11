/* @flow */

import React from 'react'
import { Back, } from 'scrubs-components'
import BackString from '!raw!scrubs-components/Back'
import { parse, } from 'react-docgen'

const example: React.Element<any> = (
  <Back />
)

const documentation: Object = parse(BackString)
export default { example, documentation, }
