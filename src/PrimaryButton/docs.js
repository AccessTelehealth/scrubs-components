/* @flow */

import React from 'react'
import PrimaryButtonString from '!raw!scrubs-components/PrimaryButton'
import { parse, } from 'react-docgen'
import { PrimaryButton, } from 'scrubs-components'

const example: React.Element<any> = (
  <PrimaryButton>
    Select a Pharmacy
  </PrimaryButton>
)

const documentation: Object = parse(PrimaryButtonString)
export default { example, documentation, }
