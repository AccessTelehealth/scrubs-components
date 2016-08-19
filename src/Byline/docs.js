/* @flow */

import React from 'react'
import { Byline } from '../'
import BylineString from '!raw!..//Byline'
import { parse } from 'react-docgen'

const Example = (): React.Element<*> => {
  return (
    <Byline>
        {'April 28 2016 at 9:40am'}
    </Byline>
  )
}

const documentation: Object = parse(BylineString)
export default { Example, documentation }
