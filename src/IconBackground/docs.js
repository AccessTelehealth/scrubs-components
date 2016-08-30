/* @flow */

import React from 'react'
import { IconBackground, Row, Grid } from '../'
import IconBackgroundString from '!raw!..//IconBackground'
import { parse } from 'react-docgen'

const Example = (): React.Element<*> => {
  return (
    <Row>
      <Grid cols={4} align="middle" textAlign='left'>
        <IconBackground backgroundColour='blueOpaque' icon='plus' size='large'/>
      </Grid>
      <Grid cols={4} align="middle" textAlign='center'>
        <IconBackground backgroundColour='greyDark' fill='white' icon='heart' size='large'/>
      </Grid>
      <Grid cols={4} align="middle" textAlign='right'>
        <IconBackground backgroundColour='blueOpaque' icon='chat' size='large'/>
      </Grid>
    </Row>
  )
}

const documentation: Object = parse(IconBackgroundString)
export default { Example, documentation }
