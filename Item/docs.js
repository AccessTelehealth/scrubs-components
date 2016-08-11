/* @flow */

import React from 'react'
import ItemString from '!raw!scrubs-components/Item'
import { parse, } from 'react-docgen'
import { Item, Text, Row, } from 'scrubs-components'

const example: React.Element<any> = (
  <Item>
    <Row><Text small bold>Amoxicillin</Text></Row>
    <Row><Text small>5mg capsule</Text></Row>
  </Item>
)

const documentation: Object = parse(ItemString)
export default { example, documentation, }
