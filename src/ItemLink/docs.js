/* @flow */

import React from 'react'
import ItemLinkString from '!raw!scrubs-components/ItemLink'
import { parse, } from 'react-docgen'
import { ItemLink, Text, Row, Action, } from 'scrubs-components'

const example: React.Element<any> = (
  <ItemLink>
    <Row>
      <Text small bold>Amoxicillin</Text>
      <Action icon="right">View</Action>
    </Row>
    <Row>
      <Text small>5mg capsule</Text>
    </Row>
  </ItemLink>
)

const documentation: Object = parse(ItemLinkString)
export default { example, documentation, }
