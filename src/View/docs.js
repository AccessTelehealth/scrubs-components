/* @flow */

import React from 'react'
import TopbarString from '!raw!..//Topbar'
import { parse, } from 'react-docgen'
import {
  View, Page, Topbar, Title, Section, Back, Action, Masthead, Headline,
  Byline, Heading, Paragraph, List, Item, Row, Text, Grid,
} from '../'

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
              <Grid cols={9} align='middle'>
                <Text small bold>Amoxycillin</Text>
              </Grid>
              <Grid cols={3} align='middle' textAlign='right'>
                <Action icon='right'>View</Action>
              </Grid>
            </Row>
          </Item>
          <Item>
            <Row>
              <Grid cols={9} align='middle'>
                <Text small bold>Medical Certificate</Text>
              </Grid>
              <Grid cols={3} align='middle' textAlign='right'>
                <Action icon='right'>View</Action>
              </Grid>
            </Row>
          </Item>
        </List>
      </Section>
    </Page>
  </View>
)

const documentation: Object = parse(TopbarString)
export default { example, documentation, }
