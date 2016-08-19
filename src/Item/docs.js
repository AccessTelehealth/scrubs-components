/* @flow */

import React from 'react'
import ItemString from '!raw!..//Item'
import { parse } from 'react-docgen'
import { Item, Text, Row } from '../'

const Example = (): React.Element<*> => {
  return (
    <Item border>
      <Row><Text size='small' bold>Amoxicillin</Text></Row>
      <Row><Text size='small'>5mg capsule</Text></Row>
    </Item>
  )
}

const documentation: Object = parse(ItemString)
export default { Example, documentation }
