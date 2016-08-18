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
              <Item border={true}>
                <Link to={`/components/${camelCaseToLowerCase(name)}`}>
                  <Row>
                    <Grid cols={11} align='middle' padding={{left: 'large'}}>
                      <Text large>{name}</Text>
                    </Grid>
                    <Grid cols={1} align='middle' padding={{right: 'small'}}>
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
