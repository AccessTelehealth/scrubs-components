/* @flow */

import React from 'react'
import ColumnString from '!raw!scrubs-components/Column'
import { parse, } from 'react-docgen'
import { Column, Row, Back, Action, Title, } from 'scrubs-components'

const example: React.Element<any> = (
  <Row>
    <Column equal>
      <Back />
    </Column>
    <Column equal centered>
      <Title>Heading</Title>
    </Column>
    <Column equal right>
      <Action icon="right">
        Edit
      </Action>
    </Column>
  </Row>
)

const documentation: Object = parse(ColumnString)
export default { example, documentation, }
