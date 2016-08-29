import React from 'react'
import { Link } from 'react-router'
import * as components from './components'
import { camelCaseToLowerCase, } from 'scrubs-libs'

import {
  View, Topbar, Title, Action, Page,  Row, Text, Item, Grid,
} from '../src/'


export default class Home extends React.Component {

  render() {
    return (
      <View>
        <Topbar>
          <Title>Scrubs Components Examples</Title>
        </Topbar>
      <Page>
          {Object.keys(components).map((name) => {
            return (
              <Item borderTop={true}>
                <Link to={`/components/${camelCaseToLowerCase(name)}`}>
                  <Row>
                    <Grid cols={10} align='middle'>
                      <Text size='h2'>{name}</Text>
                    </Grid>
                    <Grid cols={2} align='middle' textAlign='right'>
                      <Action icon="arrowRight" iconSide="right">View</Action>
                    </Grid>
                  </Row>
                </Link>
              </Item>
              )
          })}
        {this.props.children}
      </Page>
      </View>
    )
  }
}
