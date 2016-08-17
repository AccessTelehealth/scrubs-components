/* @flow */

import React from 'react'
import ItemString from '!raw!..//Item'
import { parse } from 'react-docgen'
import { Item, Text, Row, } from '../'

const example: React.Element<any> = (
  <Item border>
    <Row><Text small bold>Amoxicillin</Text></Row>
    <Row><Text small>5mg capsule</Text></Row>
  </Item>
)

const documentation: Object = parse(ItemString)
export default { example, documentation, }
