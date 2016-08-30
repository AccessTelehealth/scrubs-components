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
import SmallButton from '../components/SmallButton'
import LargeButton from '../components/LargeButton'

ReactDOM.render(
  <View>
    <Tab width={1/3} borderRight={1}>
      <TabLabel active>Consultation</TabLabel>
    </Tab>
    <Tab width={1/3} borderRight={1}>
      <TabLabel>Patient History</TabLabel>
    </Tab>
    <Tab width={1/3}>
      <TabLabel>Summary</TabLabel>
    </Tab>
    <Page>
      <SmallButton>Select Pharmacy</SmallButton>
      <SmallButton blue>Select Pharmacy</SmallButton>
      <LargeButton>Accept Consultation</LargeButton>
      <LargeButton blue>Accept Consultation</LargeButton>
      <Field>
        <Label>Input Label</Label>
        <Input />
      </Field>
    </Page>
  </View>,
  document.getElementById('root')
)
