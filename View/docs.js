/* @flow */

import React from 'react'
import TopbarString from '!raw!scrubs-components/Topbar'
import { parse, } from 'react-docgen'
import {
  View, Page, Topbar, Title, Section, Back, Action, Masthead, Headline,
  Byline, Heading, Paragraph, List, Item, Row, Text,
} from 'scrubs-components'

const example: React.Element<any> = (
  <View>
    <Topbar>
      <Back />
      <Title>Consultation</Title>
      <Action icon="right">Edit</Action>
    </Topbar>
    <Page>
      <Masthead>
        <Headline>Consultation with Dr Mark Edmin</Headline>
        <Byline>28 April 2016 at 9:20am</Byline>
      </Masthead>
      <Section>
        <Heading>Diagnosis</Heading>
        <Paragraph>
          Patient has webbed feet and should seek further medical attention.
        </Paragraph>
      </Section>
      <Section>
        <Heading>Documents</Heading>
        <List>
          <Item>
            <Row>
              <Text small bold>Amoxycillin</Text>
              <Action icon="right">View</Action>
            </Row>
          </Item>
          <Item>
            <Row>
              <Text small bold>Medical Certificate</Text>
              <Action icon="right">View</Action>
            </Row>
          </Item>
        </List>
      </Section>
    </Page>
  </View>
)

const documentation: Object = parse(TopbarString)
export default { example, documentation, }
