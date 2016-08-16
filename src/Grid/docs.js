/* @flow */

import React from 'react'
import ItemString from '!raw!..//Item'
import { parse, } from 'react-docgen'
import { Grid, Avatar } from '../'

const example: React.Element<any> = (
  <div>
    <Grid cols={3} align="middle">
      <Avatar url='http://placekitten.com/240/240' fill />
    </Grid>
    <Grid cols={9} align="middle">
      <Grid cols={9} textAlign="right">Sam Margalit</Grid>
      <Grid cols={3}>View something</Grid>
    </Grid>
  </div>
)

const documentation: Object = parse(ItemString)
export default { example, documentation, }
