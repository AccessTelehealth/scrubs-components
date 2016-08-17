/* @flow */

import React from 'react'
import SectionString from '!raw!..//Section'
import { parse } from 'react-docgen'
import { Section, Heading, Paragraph, } from '../'

const example: React.Element<any> = (
  <Section>
    <Heading>Diagnosis</Heading>
    <Paragraph>
      Patient has webbed feet and should seek further medical attention.
    </Paragraph>
  </Section>
)

const documentation: Object = parse(SectionString)
export default { example, documentation, }
