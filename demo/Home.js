import React from 'react'
import View from '../components/View'
import Section from '../components/Section'
import LargeButton from '../components/LargeButton'
import Text from '../components/Text'

const Home = ({ offline, patientQueue }) => {
  const toggleMessage = offline ? 'Go Online' : 'Need a break? Go Offline'
  return (
    <View bgBlue={!offline} bgBlueDark={offline}>
      <Section centerAlign paddingY={3}>
        <LargeButton borderWhite textWhite>{toggleMessage}</LargeButton>
      </Section>
      <Section absolute fillWidth style={{top: '50%'}} paddingX={4}>
        <Text textWhite centerAlign fontSize={1} lineHeight={2} marginBottom={2}>
          Checking for Patients...
        </Text>
      </Section>
      <Section absolute fillWidth centerAlign style={{bottom: 0}} paddingX={4} paddingY={4}>
        <Text textWhite fontSize={3} bold>Have a Question? Ask us</Text>
      </Section>
    </View>
  )
}

export default Home
