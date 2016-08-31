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
      <Section clearfix borderColour='grey' padding={3} borderBottom={1}>
        <Base>
          <Base float='left' position='absolute' borderRadius='rounded' backgroundSize='contain'
            style={{width: '5rem', height: '5rem'}} backgroundImage={patientImage} />
          <Section float='left' width='fill' style={{paddingLeft: '6rem'}}>
            <Section>
              <Grid size={3/4}>
                <Text fontWeight='bold' marginBottom={2}>
                  Roger McBride
                </Text>
              </Grid>
              <Grid size={1/4}>
                <Text textColour='blue' fontSize={5}>
                  28 April 2016
                </Text>
              </Grid>
            </Section>
            <Text marginBottom={2}>
              Male / 28 / Melbourne
            </Text>
            <Text>
              No Documents
            </Text>
          </Section>
        </Base>
      </Section>
    </View>
  )
}

export default History
