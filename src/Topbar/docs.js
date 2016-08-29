/* @flow */

import React from 'react'
import TopbarString from '!raw!../Topbar'
import { parse } from 'react-docgen'
import { Topbar, Title, Back, Action, Grid, Row } from '../'

const Example = (): React.Element<*> => {
  return (
    <Topbar backgroundColour='grey'>
      <Row>
        <Grid align='middle' cols={3}><Back /></Grid>
        <Grid cols={6}><Title>Consultation</Title></Grid>
        <Grid align='middle' cols={3}><Action icon="arrowRight" iconSide="right">Edit</Action></Grid>
      </Row>
    </Topbar>
  )
}

const documentation: Object = parse(TopbarString)
export default { Example, documentation }
