/* @flow */

import React from 'react'
import ItemString from '!raw!..//Item'
import { parse } from 'react-docgen'
import { List, Item, Text, Row, } from '../'

const Example = (): React.Element<*> => {
  return (
    <List>
      <Item>
        <Row><Text size={'small'} bold>Amoxicillin</Text></Row>
        <Row><Text size={'small'}>5mg capsule</Text></Row>
      </Item>
      <Item>
        <Row><Text size={'small'} bold>Amoxicillin</Text></Row>
        <Row><Text size={'small'}>25mg capsule</Text></Row>
      </Item>
    </List>
  )
}

const documentation: Object = parse(ItemString)
export default { Example, documentation, }
