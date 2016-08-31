import React from 'react'
import View from '../components/View'
import Section from '../components/Section'
import LargeButton from '../components/LargeButton'
import Text from '../components/Text'

const Home = ({ offline, patientQueue }) => {
  const toggleMessage = offline ? 'Go Online' : 'Need a break? Go Offline'
  const patientWaiting = patientQueue > 0
  return (
    <View backgroundColour={offline ? 'blueDark' : 'blue'}>
      <Section textAlign='center' paddingY={3}>
        <LargeButton borderColour='white' textColour='white'>
          {toggleMessage}
        </LargeButton>
      </Section>
      <Section position='absolute' textAlign='center' width='fill' style={{top: '50%'}} paddingX={4}>
        <Text textWhite fontSize={1} lineHeight={2} marginBottom={4}>
          Home message
        </Text>
        {patientWaiting && (
          <LargeButton borderColour='white' textColour='white'>
            Accept Consultation
          </LargeButton>
        )}
      </Section>
      <Section position='absolute' width='fill' textAlign='center' style={{bottom: 0}} paddingX={4} paddingY={4}>
        <Text textColour='white' fontSize={3} fontWeight='bold'>
          Have a Question? Ask us
        </Text>
      </Section>
    </View>
  )
}

export default Home
