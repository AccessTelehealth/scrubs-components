import React from 'react'
import { Link } from 'react-router'
import * as components from './components'
import {
  View, Topbar, Title, Action, Page,  Row, Text, Item,
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
              <Item>
                <Link to={`/components/${camelCaseToLowerCase(name)}`}>
                  <Row>
                      <Text>{name}</Text>
                      <Action icon="right">View</Action>
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

const camelCaseToLowerCase = (string: string): string => {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}
