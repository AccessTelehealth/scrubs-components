/* @flow */

import React from 'react'
import { Action, } from 'scrubs-components'
import ActionString from '!raw!scrubs-components/Action'
import { parse, } from 'react-docgen'

const example: React.Element<any> = (
  <Action icon="right">Next</Action>
)

const documentation: Object = parse(ActionString)
export default { example, documentation, }
