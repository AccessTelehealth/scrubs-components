import React from 'react'
import View from '../components/View'
import Section from '../components/Section'
import Text from '../components/Text'
import Page from '../components/Page'
import SmallButton from '../components/SmallButton'
import Input from '../components/Input'
import Label from '../components/Label'
import Field from '../components/Field'
import Tab from '../components/Tab'
import TabLabel from '../components/TabLabel'
import Grid from '../components/Grid'

const PatientSummary = () => {
  return (
    <View>
      <Section>
        <Tab size={1/3} borderRight={1}><TabLabel>Consultation</TabLabel></Tab>
        <Tab size={1/3} borderRight={1}><TabLabel>Patient History</TabLabel></Tab>
        <Tab size={1/3}><TabLabel textBlue active>Summary</TabLabel></Tab>
      </Section>
      <Page>
        <Section marginBottom={4} centerAlign>
          <Text centerAlign bold fontSize={4} lineHeight={1} marginBottom={2}>
            Patient Name
         </Text>
         <Text centerAlign fontSize={4} lineHeight={1} marginBottom={2}>
           Patient Details
        </Text>
          <Text centerAlign fontSize={4} lineHeight={1} marginBottom={2}>
            Patient Request
         </Text>
        <SmallButton bgBlue textWhite borderBlue fontSize={5}>Finish Consultation</SmallButton>
        </Section>
        <Section marginBottom={2}>
          <Field>
            <Label>Diagnosis</Label>
            <Input placeholder="Diagnosis Details"></Input>
          </Field>
          <Field>
            <Label>Notes</Label>
            <Input placeholder="Further Notes"></Input>
          </Field>
        </Section>
        <Section>
          <Label>Documents</Label>
          <Section>
            <Grid cols={3/4}><Text>Medical Certificate</Text></Grid>
            <Grid cols={1/4} alignRight  ><SmallButton borderBlue textBlue paddingTop={1} fontSize={5}>Edit</SmallButton></Grid>
          </Section>
          <Section>
            <Grid></Grid>
            <Grid></Grid>
          </Section>

        </Section>
      </Page>
    </View>
  )
}

export default PatientSummary
