import React from 'react'
import ReactDOM from 'react-dom'
import defaults from '../styles/defaults.css'
import Grid from '../components/Grid'
import Tab from '../components/Tab'
import TabLabel from '../components/TabLabel'
import View from '../components/View'
import Page from '../components/Page'
import Text from '../components/Text'
import Field from '../components/Field'
import Input from '../components/Input'
import Label from '../components/Label'
import Section from '../components/Section'
import SmallButton from '../components/SmallButton'
import LargeButton from '../components/LargeButton'

ReactDOM.render(
  <View>
    <Tab size={1/3} borderRight={1}>
      <TabLabel active>Consultation</TabLabel>
    </Tab>
    <Tab size={1/3} borderRight={1}>
      <TabLabel>Patient History</TabLabel>
    </Tab>
    <Tab size={1/3}>
      <TabLabel>Summary</TabLabel>
    </Tab>
    <Page>
      <Field>
        <Label>Input Label</Label>
        <Input placeholder='Something' />
      </Field>
      <Field>
        <Label>Input Label</Label>
        <Input placeholder='Something' />
      </Field>
      <Section paddingTop={2} paddingX={4} textAlign='center'>
        <LargeButton blue width='fill'>Submit Form</LargeButton>
      </Section>
    </Page>
  </View>,
  document.getElementById('root')
)
