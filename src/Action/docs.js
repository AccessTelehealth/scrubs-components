/* @flow */

import React from 'react'
import { Action, Row, Grid, Text } from '../'
import ActionString from '!raw!..//Action'
import { parse } from 'react-docgen'

const example: React.Element<any> = (
  <Row>
    <Grid cols={1} align='middle' >
        <Action icon="arrowLeft" iconSide="left">Prev</Action>
    </Grid>
    <Grid textAlign='center' align='middle' cols={10}>
        <Text>I <Action icon="heart" /> Icons</Text>
    </Grid>
    <Grid cols={1} align='middle'>
        <Action icon="arrowRight" iconSide="right">Next</Action>
    </Grid>
  </Row>
)

const documentation: Object = parse(ActionString)
export default { example, documentation }
