/* @flow */

import React from 'react'
import TextString from '!raw!..//Text'
import { parse } from 'react-docgen'
import { Text, Section, Row } from '../'

const Example = (): React.Element<*> => {
  return (
    <Section>
      <Row>
        <Text>Read our <Text bold>Terms & Conditions</Text>.</Text>
      </Row>
      <Row>
        <Text>Here is some
          <Text lineHeight={'large'} italicised>dark blue italic text, with a smidge more space</Text>.
        </Text>
      </Row>
      <Row>
        <Text>When we're angry we use
          <Text bold size={'large'} colour={'red'}> large red and bold</Text>.
        </Text>
      </Row>
      <Row>
        <Text>When we're being subtle we use
          <Text size={'small'} colour={'greyDark'}> small grey</Text>.
        </Text>
      </Row>
    </Section>
  )
}

const documentation: Object = parse(TextString)
export default { Example, documentation }
