/* @flow */

import React from 'react'
import GridString from '!raw!..//Grid'
import { parse } from 'react-docgen'
import { Grid, Avatar, Item, Row, Text, Action } from '../'

const data = {
  name: 'Mia Mollie', diagnosis: 'Ear Infection', documents: [1,2,3],
  date: 1471306921302, link: 'http://google.com',
  avatar: 'http://placekitten.com/250/250',
}

const { avatar, name, link, diagnosis, documents, date } = data

const Example = (): React.Element<*> => {
  return (
    <Item border={true}>
      <Row>
        <Grid cols={2} align='middle'>
          <Avatar url={avatar} fill />
        </Grid>
        <Grid cols={10} align='middle' padding={{left: 'medium'}}>
          <Row>
            <Grid cols={9} align='middle'>
              <Text size='small' bold>{name}</Text>
            </Grid>
            <Grid cols={3} align='middle' textAlign='right'>
              <Action icon='arrowRight' iconSide='right' to={link}>
                View
              </Action>
            </Grid>
          </Row>
          <Row>
            <Text size='small'>{diagnosis}</Text>
          </Row>
          <Row>
            <Grid cols={7} align='middle'>
              <Text size='small' colour='blue'>{documents.length} Document{documents.length !== 1 && 's'}</Text>
            </Grid>
            <Grid cols={5} align='middle' textAlign='right'>
              <Text size='small'>{date}</Text>
            </Grid>
          </Row>
        </Grid>
      </Row>
    </Item>
  )
}

const documentation: Object = parse(GridString)
export default { Example, documentation }
