/* @flow */

import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import ReactDOM from 'react-dom'
import * as components from './components'
import Home from './Home'
import { lowerCaseToCamelCase } from 'scrubs-libs'
import {
  View, Section, Page, Text, Paragraph, Item, List, Topbar, Title, Heading,
} from '../src/'

class Wrapper extends React.Component {
  render() {
    const active = this.props.routeParams.component
    const lowerCaseActive = lowerCaseToCamelCase(active)
    const activeComponent = components[lowerCaseActive]
    const { Example, documentation } = activeComponent
    return (
      <View>
        <Topbar>
          <Title>{lowerCaseActive}</Title>
        </Topbar>
        <Page>
          <Section>
            <Heading>Example</Heading>
            <Example />
          </Section>
          <Section>
            <Heading>Description</Heading>
            <Paragraph>{documentation.description}</Paragraph>
          </Section>
          <Section>
            <Heading>Props</Heading>
              <List>
                {renderProps(documentation.props)}
              </List>
          </Section>
        </Page>
      </View>
    )
  }
}

const renderProps = (props: Object): Array<React.Element<any>> => {
  return Object.keys(props).map((key: string, index: number): React.Element<any> => {
    const prop = props[key]
    return (
      <Item key={index}>
        <Text size='h5' colour='blue' bold>{key}</Text>
        <div>
          <Text size='h5' >required:</Text> <Text size='h5' bold>{prop.required ? 'true' : 'false'}</Text>
        </div>
        <div>
          <Text size='h5' >type:</Text> <Text size='h5' bold>{prop.flowType && prop.flowType.name}</Text>
        </div>
      </Item>
    )
  })
}

ReactDOM.render(
  <Router>
    <Route path="/" component={Home}/>
    <Route path="/components/:component" component={Wrapper}/>
  </Router>,
 document.getElementById('root'))
