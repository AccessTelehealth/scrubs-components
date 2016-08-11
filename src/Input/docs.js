/* @flow */

import React from 'react'
import InputString from '!raw!scrubs-components/Input'
import { parse, } from 'react-docgen'
import { Input, } from 'scrubs-components'

const example: React.Element<any> = (
  <Input
    value="Value"
    placeholder="Placeholder"
    onChange={(event) => {}}
    valid={true}
  />
)

const documentation: Object = parse(InputString)
export default { example, documentation, }
