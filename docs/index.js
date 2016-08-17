/* @flow */

import React from 'react'
import { Router, Route, browserHistory, IndexRoute, } from 'react-router'
import ReactDOM from 'react-dom'
// import defaults from 'traits/defaults.css'
import * as components from './components'
import Home from './Home'
import {
  View, Section, Page, Row, Text, Item, List, Topbar, Back, Title, Heading,
} from '../src/'

class Wrapper extends React.Component {

  render() {
    const active = this.props.routeParams.component
    const activeComponent = components[lowerCaseToCamelCase(active)]
    return (
      <View>
        <Topbar>
          <Title>{lowerCaseToCamelCase(active)}</Title>
        </Topbar>
        <Page>
          <Section>
            <Heading>Example</Heading>
            <Row>{activeComponent.example}</Row>
          </Section>
          <Section>
            <Heading>Description</Heading>
            <Text>{activeComponent.documentation.description}</Text>
          </Section>
          <Section>
            <Heading>Props</Heading>
              <List>
                {renderProps(activeComponent.documentation.props)}
              </List>
          </Section>
        </Page>
      </View>
    )
  }
}

const lowerCaseToCamelCase = (string: string): string => {
  return string.replace(/([a-z])([a-z]*)-?([a-z])?([a-z]*)?/g,
  (match, p1, p2, p3, p4) => {
    return `${p1.toUpperCase()}${p2}${p3 && p3.toUpperCase() || ''}${p4 || ''}`
  })
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
