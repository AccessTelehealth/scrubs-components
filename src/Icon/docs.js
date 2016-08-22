/* @flow */

import React from 'react'
import IconString from '!raw!..//Icon'
import { parse } from 'react-docgen'
import { Icon, Grid, Row } from '../'

const Example = (): React.Element<*> => {
  return (
    <Row>
      <Grid textAlign='center' align='middle' cols={2}>
        <Icon icon="heart" size="large" fill="red" />
      </Grid>
      <Grid textAlign='center' align='middle' cols={2}>
        <Icon icon="phone" size="large" fill="greyDark" />
      </Grid>
      <Grid textAlign='center' align='middle' cols={2}>
        <Icon icon="chat" size="large" />
      </Grid>
      <Grid textAlign='center' align='middle' cols={2}>
        <Icon icon="flipCamera" size="large" fill="green" />
      </Grid>
      <Grid textAlign='center' align='middle' cols={2}>
        <Icon icon="caduceus" size="large" fill="blue" />
      </Grid>
      <Grid textAlign='center' align='middle' cols={2}>
        <Icon icon="home" size="large" fill="grey" />
      </Grid>
    </Row>
  )
}

const documentation: Object = parse(IconString)
export default { Example, documentation }
