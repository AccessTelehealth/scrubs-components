/* @flow */

import React from 'react'
import { Avatar, } from '../'
import AvatarString from '!raw!..//Avatar'
import { parse, } from 'react-docgen'

const example: React.Element<any> = (
  <Avatar url="http://placekitten.com/158/160" />
)

const documentation: Object = parse(AvatarString)
export default { example, documentation, }
