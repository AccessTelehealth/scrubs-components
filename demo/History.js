import React from 'react'
import View from '../components/View'
import Page from '../components/Page'
import Grid from '../components/Grid'
import Section from '../components/Section'
import LargeButton from '../components/LargeButton'
import Base from '../components/Base'
import Text from '../components/Text'
import patientImage from '../images/patient.png'

const History = () => {
  return (
    <View>
      <Section clearfix borderGrey padding={3} borderBottom={1}>
        <Base>
          <Base left absolute rounded style={{width: '5rem', height: '5rem'}} contain backgroundImage={patientImage} />
          <Section left style={{paddingLeft: '6rem'}} fillWidth>
            <Section>
              <Grid size={3/4}><Text bold marginBottom={2}>Roger McBride</Text></Grid>
              <Grid size={1/4}><Text textBlue fontSize={5}>28 April 2016</Text></Grid>
            </Section>
            <Text marginBottom={2}>Male / 28 / Melbourne</Text>
            <Text>No Documents</Text>
          </Section>
        </Base>
      </Section>
      <Section clearfix borderGrey padding={3} borderBottom={1}>
        <Base>
          <Base left rounded style={{width: '5rem', height: '5rem'}} contain backgroundImage={patientImage} />
          <Section left paddingLeft={3}>
            <Text bold marginBottom={2}>Sam Margalit</Text>
            <Text marginBottom={2}>Male / 28 / Melbourne</Text>
            <Text>No Documents</Text>
          </Section>
        </Base>
      </Section>
      <Section clearfix borderGrey padding={3} borderBottom={1}>
        <Base>
          <Base left rounded style={{width: '5rem', height: '5rem'}} contain backgroundImage={patientImage} />
          <Section left paddingLeft={3}>
            <Text bold marginBottom={2}>Roger McBride</Text>
            <Text marginBottom={2}>Female / 28 / Melbourne</Text>
            <Text>No Documents</Text>
          </Section>
        </Base>
      </Section>
    </View>
  )
}

export default History
