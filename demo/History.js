import React from 'react'
import View from '../components/View'
import Grid from '../components/Grid'
import Section from '../components/Section'
import Base from '../components/Base'
import Text from '../components/Text'
import TopBar from '../components/TopBar'
import TopBarIcon from '../components/TopBarIcon'
import TopBarTitle from '../components/TopBarTitle'
import MenuIcon from '../icons/menu.svg'
import patientImage from '../images/patient.png'

const Navigation = () => {
  return (
    <TopBar>
      <TopBarIcon icon={MenuIcon} />
      <TopBarTitle>
        <Text fontWeight='bold' textColour='white' fontSize={5} lineHeight={2}>History</Text>
        <Text textColour='white' fontSize={5} lineHeight={2}>20 patients waiting</Text>
      </TopBarTitle>
    </TopBar>
  )
}

const History = () => {
  return (
    <View>
      <Navigation />
      {([{id: 1},{id: 2},{id: 3}]).map(ConsultationExtract)}
    </View>
  )
}

const ConsultationExtract = (consultation) => {
  return (
    <Section key={consultation.id} clearfix borderColour='grey' padding={3} borderBottom={1}>
      <Base>
        <Base float='left' position='absolute' borderRadius='rounded' backgroundSize='contain'
          style={{width: '5rem', height: '5rem'}} backgroundImage={patientImage} />
        <Section float='left' width='fill' style={{paddingLeft: '6rem'}}>
          <Section clearfix marginBottom={2}>
            <Grid size={3/4}>
              <Text fontWeight='bold'>
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
            Male, 28, Melbourne
          </Text>
          <Text>
            No Documents
          </Text>
        </Section>
      </Base>
    </Section>
  )
}


export default History
