import React, { Component } from 'react'
import submit from 'redux-form-submit'
import { postListReadRequest } from 'store/actions'

import { TimelinePage } from 'components'
import { config } from './PostForm'

class TimelinePageContainer extends Component {
  static post({ req, store }) {
    return Promise.all([
      this.get({ store }),
      store.dispatch(submit(config, req.body)),
    ])
  }

  static get({ store }) {
    return new Promise((resolve, reject) => {
      store.dispatch(postListReadRequest({ filters: ['todo'], limit: 20 }, resolve, reject))
    })
  }

  render() {
    return <TimelinePage filterList={['todo']}/>
  }
}

export default TimelinePageContainer
