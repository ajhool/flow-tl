import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { fromForm } from 'store/selectors'
import { postCreateRequest } from 'store/actions'
import { createValidator, required } from 'services/validation'

import { PostForm } from 'components'

//TODO: Turn this container into a class so we can handle start date and end date, etc.
const PostFormContainer = props => <PostForm {...props} />

const onSubmit = (data, dispatch) => new Promise((resolve, reject) => {
  dispatch(postCreateRequest(data, resolve, reject))
})

const validate = createValidator({
  title: [required],
  body: [required],
})

const mapStateToProps = (state) => ({
  initialValues: {
    _csrf: fromForm.getCsrfToken(state),
  },
})

//TODO: Tie this into the PostForm component, above
const handleChangeStartDate = (event, date) => {
  this.setState({
    startDate: date,
  });
}

//TODO: Tie this into the PostForm component, above
const handleChangeEndDate = (event, date) => {
  this.setState({
    endDate: date,
  });
}

const onTagListChange = (tagList) => {
  this.setState({
    tagList: tagList
  })
}

const onMediaListChange = (mediaList) => {
  this.setState({
    mediaList: mediaList
  })
}

export const config = {
  form: 'PostForm',
  fields: ['title', 'body'],
  destroyOnUnmount: false,
  onSubmit,
  validate,
}

export default connect(mapStateToProps)(reduxForm(config)(PostFormContainer))
