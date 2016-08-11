/* @flow */

import React from 'react'
import MastheadString from '!raw!scrubs-components/Masthead'
import { parse, } from 'react-docgen'
import { Masthead, Headline, Byline, Page, Heading, Paragraph, Section, } from 'scrubs-components'

const example: React.Element<any> = (
  <Page>
    <Masthead>
      <Headline>Consultation with Dr Mark Edmin</Headline>
      <Byline>{'28 April 2016 9:20am'}</Byline>
    </Masthead>
    <Section>
      <Heading>
        Diagnosis
      </Heading>
      <Paragraph>
        Patient has webbed feet and should seek further medical attention.
      </Paragraph>
    </Section>
  </Page>
)

const documentation: Object = parse(MastheadString)
export default { example, documentation, }
