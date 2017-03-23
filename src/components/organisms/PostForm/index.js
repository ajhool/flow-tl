import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'

import { ReduxField, Heading, Button } from 'components'

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
`

const PostForm = ({ handleSubmit, submitting }) => {
  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <Heading level={2}>Create a post</Heading>
      <Field name="_csrf" type="hidden" component="input" />
      <Field name="title" label="Title" component={ReduxField} />
      <Field name="body" label="Body" type="textarea" component={ReduxField} />
      <Field name="startDate" label="Start Date" component={ReduxField} />
      <Field name="endDate" label="End Date" component={ReduxField} />
      {<MediaItemInputsList></MediaItemInputsList>}
      {<TagsInputsList></TagsInputsList>}
      <Button type="submit" disabled={submitting}>Create</Button>
    </Form>
  )
}

PostForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
}

export default PostForm
