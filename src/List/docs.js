/* @flow */

import React from 'react'
import ItemString from '!raw!..//Item'
import { parse } from 'react-docgen'
import { List, Item, Text, Row, } from '../'

const example: React.Element<any> = (
  <List>
    <Item>
      <Row><Text small bold>Amoxicillin</Text></Row>
      <Row><Text small>5mg capsule</Text></Row>
    </Item>
    <Item>
      <Row><Text small bold>Amoxicillin</Text></Row>
      <Row><Text small>25mg capsule</Text></Row>
    </Item>
  </List>
)

const documentation: Object = parse(ItemString)
export default { example, documentation, }
