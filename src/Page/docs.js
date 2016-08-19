/* @flow */

import React from 'react'
import PageString from '!raw!..//Page'
import { parse } from 'react-docgen'
import { Masthead, Headline, Byline, Page, Heading, Paragraph, Section } from '../'

const Example = (): React.Element<*> => {
  return (
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
}

const documentation: Object = parse(PageString)
export default { Example, documentation }
