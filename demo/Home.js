import React from 'react'
import View from '../components/View'
import Section from '../components/Section'
import LargeButton from '../components/LargeButton'
import Text from '../components/Text'

const Home = () => {
  return (
    <View bgBlue>
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
