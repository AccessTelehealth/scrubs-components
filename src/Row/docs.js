/* @flow */

import React from 'react'
import RowString from '!raw!..//Row'
import { parse } from 'react-docgen'
import { Row, Text } from '../'

const Example = (): React.Element<*> => {
  return (
    <Row>
      <Text size='h5'>Last prescribed</Text>
      <Text size='h5'>April 28 2016</Text>
    </Row>
  )
}

const documentation: Object = parse(RowString)
export default { Example, documentation }
