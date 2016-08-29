/* @flow */

import React from 'react'
import ItemString from '!raw!..//Item'
import { parse } from 'react-docgen'
import { Item, Text, Row } from '../'

const Example = (): React.Element<*> => {
  return (
    <Item borderBottom={true}>
      <Row><Text size='h5' bold>Amoxicillin</Text></Row>
      <Row><Text size='h5'>5mg capsule</Text></Row>
    </Item>
  )
}

const documentation: Object = parse(ItemString)
export default { Example, documentation }
