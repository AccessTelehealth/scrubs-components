/* @flow */

import React from 'react'
import GridString from '!raw!..//Grid'
import { parse } from 'react-docgen'
import { Grid, Avatar, Item, Row, Text, Action, Section } from '../'

const data = {
  name: 'Mia Mollie', diagnosis: 'Ear Infection', documents: [1,2,3],
  date: 1471306921302, link: 'http://google.com',
  avatar: 'http://placekitten.com/250/250',
}

const { avatar, name, link, diagnosis, documents, date } = data

const Example = (): React.Element<*> => {
  return (
    <Section>
      <Item borderBottom>
        <Row>
          <Grid cols={2} align='middle'>
            <Avatar backgroundImageURL={avatar} fill />
          </Grid>
          <Grid cols={10} align='middle' padding={{left: 'medium'}}>
            <Row>
              <Grid cols={9} align='middle'>
                <Text size='h5' bold>{name}</Text>
              </Grid>
              <Grid cols={3} align='middle' textAlign='right'>
                <Action icon='arrowRight' iconSide='right' to={link}>
                  View
                </Action>
              </Grid>
            </Row>
            <Row>
              <Text size='h5'>{diagnosis}</Text>
            </Row>
            <Row>
              <Grid cols={7} align='middle'>
                <Text size='h5' colour='blue'>{documents.length} Document{documents.length !== 1 && 's'}</Text>
              </Grid>
              <Grid cols={5} align='middle' textAlign='right'>
                <Text size='h5'>{date}</Text>
              </Grid>
            </Row>
          </Grid>
        </Row>
      </Item>
      <Item>
        <Row>
          <Grid cols={4} borderBottom padding={{bottom: 'medium'}} textAlign='center' align='middle'>
            <Text size='h5' colour="blue">Patient</Text>
          </Grid>
          <Grid cols={4} borderBottom padding={{bottom: 'medium'}} borderLeft textAlign='center' align='middle'>
            <Text size='h5' colour="greyDark">Consultation</Text>
          </Grid>
          <Grid cols={4} borderBottom padding={{bottom: 'medium'}} borderLeft textAlign='center' align='middle'>
            <Text size='h5' colour="greyDark">Summary</Text>
          </Grid>
        </Row>
      </Item>
    </Section>
  )
}

const documentation: Object = parse(GridString)
export default { Example, documentation }
