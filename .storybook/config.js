import React from 'react'
import { configure, addDecorator } from '@kadira/storybook'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import configureStore from 'store/configure'
import muiTheme from 'components/themes/muiTheme'
import theme from 'components/themes/default'

const store = configureStore({})
const req = require.context('components', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(story => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <ThemeProvider theme={theme}>{story()}</ThemeProvider>
    </MuiThemeProvider>
  </Provider>
))

configure(loadStories, module)
