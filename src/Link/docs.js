/* @flow */

import React from 'react'
import LinkString from '!raw!..//Link'
import { parse } from 'react-docgen'
import { Link, Text, } from '../'

const example: React.Element<any> = (
  <Link>
    <Text blue>Read our Documentation</Text>
  </Link>
)

const documentation: Object = parse(LinkString)
export default { example, documentation, }
