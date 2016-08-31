import React from 'react'
import View from '../components/View'
import Section from '../components/Section'
import Text from '../components/Text'
import Page from '../components/Page'
import SmallButton from '../components/SmallButton'
import MediumButton from '../components/MediumButton'
import TextArea from '../components/TextArea'
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
        <Tab size={1/3}><TabLabel textColour='blue' active>Summary</TabLabel></Tab>
      </Section>
      <Page>
        <Section marginBottom={4} marginTop={2} textAlign='center'>
          <Text textAlign='center' fontWeight='bold' fontSize={4} lineHeight={1} marginBottom={2}>
            Tessa Violet
         </Text>
         <Text textAlign='center' fontSize={4} lineHeight={1} marginBottom={2}>
           28, Female, Melbourne
        </Text>
          <Text textAlign='center' fontSize={4} lineHeight={2} marginBottom={2}>
            Seeking prescription reissue
         </Text>
        <MediumButton textColour='white' borderColour='blue' backgroundColour='blue' fontSize={5}>
          Finish Consultation
        </MediumButton>
        </Section>
        <Section marginBottom={2}>
          <Field>
            <Label>Diagnosis</Label>
            <Input placeholder="Diagnosis Details"></Input>
          </Field>
          <Field>
            <Label>Notes</Label>
            <TextArea placeholder="Further Notes"></TextArea>
          </Field>
        </Section>
      </Page>
        <Section>
          <Text paddingLeft={3} marginBottom={2} display='block' uppercase fontWeight='bold'
          fontSize={5} textColour='greyDark'>Documents</Text>
          <Section borderTop={1} borderColour='grey'>
            <Section padding={3}>
              <Grid size={3/4}>
                <Text fontWeight='bold' lineHeight={3}>Medical Certificate</Text>
                <Text lineHeight={3}>Date - date</Text>
              </Grid>
              <Grid size={1/4} align='top' textAlign='right'>
                <SmallButton borderColour='blue' textColour='blue' paddingTop={1} fontSize={5}>
                  Edit
                </SmallButton>
              </Grid>
            </Section>
          </Section>
          <Section borderTop={1} borderColour='grey'>
            <Section padding={3}>
              <Grid size={3/4}>
                <Text fontWeight='bold' lineHeight={3}>Medical Certificate</Text>
                <Text lineHeight={3}>Date - date</Text>
              </Grid>
              <Grid size={1/4} align='top' textAlign='right'>
                <SmallButton borderColour='blue' textColour='blue' paddingTop={1} fontSize={5}>
                  Edit
                </SmallButton>
              </Grid>
            </Section>
          </Section>

        </Section>
    </View>
  )
}

export default PatientSummary
