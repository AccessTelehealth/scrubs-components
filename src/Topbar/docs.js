/* @flow */

import React from 'react'
import TopbarString from '!raw!scrubs-components/Topbar'
import { parse, } from 'react-docgen'
import { Topbar, Title, Back, Action, } from 'scrubs-components'

const example: React.Element<any> = (
  <Topbar>
    <Back />
    <Title>Consultation</Title>
    <Action icon="right">Edit</Action>
  </Topbar>
)

const documentation: Object = parse(TopbarString)
export default { example, documentation, }
