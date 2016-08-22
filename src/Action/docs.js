/* @flow */

import React from 'react'
import { Action, Row, Grid } from '../'
import ActionString from '!raw!..//Action'
import { parse } from 'react-docgen'

const Example = (): React.Element<*> => {
  return (
    <Row>
      <Grid cols={4} align="middle" textAlign='left'><Action icon="arrowLeft" iconSide="left">Prev</Action></Grid>
      <Grid cols={4} align="middle" textAlign='center'><Action icon="home" iconSide="left"></Action></Grid>
      <Grid cols={4} align="middle" textAlign='right'><Action icon="arrowRight" iconSide="right">Next</Action></Grid>
    </Row>
  )
}

const documentation: Object = parse(ActionString)
export default { Example, documentation }
