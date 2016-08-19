/* @flow */

import React from 'react'
import { Avatar } from '../'
import AvatarString from '!raw!..//Avatar'
import { parse } from 'react-docgen'

const Example = (): React.Element<*> => {
  return <Avatar url="http://placekitten.com/158/160" />
}

const documentation: Object = parse(AvatarString)
export default { Example, documentation }
