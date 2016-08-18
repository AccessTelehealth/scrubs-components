/* @flow */

import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import ReactDOM from 'react-dom'
// import defaults from 'traits/defaults.css'
import * as components from './components'
import Home from './Home'
import { lowerCaseToCamelCase } from 'scrubs-libs'
import {
  View, Section, Page, Text, Item, List, Topbar, Title, Heading,
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
            <Text>{documentation.description}</Text>
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
    const prop: ComponentPropsType = props[key]
    return (
      <Item key={index}>
        <Text small blue bold>{key}</Text>
        <div>
          <Text small>required:</Text> <Text small bold>{prop.required ? 'true' : 'false'}</Text>
        </div>
        <div>
          <Text small>type:</Text> <Text small bold>{prop.flowType && prop.flowType.name}</Text>
        </div>
      </Item>
    )
  })
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route path="/components/:component" component={Wrapper}/>
  </Router>,
 document.getElementById('root'))
