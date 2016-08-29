/* @flow */

import React from 'react'
import ButtonSmallString from '!raw!..//ButtonSmall'
import { parse } from 'react-docgen'
import { ButtonSmall, View, Text, Grid, Row } from '../'

const Example = (): React.Element<*> => {
  return (
    <View backgroundImageURL="https://placekitten.com/100/50">
      <Text colour="white" > Check out ma awesome button</Text>
      <Row>
        <Grid cols={12} textAlign='center' align='middle'>
          <ButtonSmall textColour='white' backgroundColour='transparent' borderColour='white' >
            This is a small button
          </ButtonSmall>
        </Grid>
      </Row>
    </View>
  )
}

const documentation: Object = parse(ButtonSmallString)
export default { Example, documentation }
