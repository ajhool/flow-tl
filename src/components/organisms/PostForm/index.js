import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';

import { ReduxField, Heading, Button, MediaItemInputsList, TagInputsList } from 'components'

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
`

const PostForm = ({ mediaList, tagList, handleChangeStartDate, handleChangeEndDate, handleSubmit, submitting }) => {
  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <Heading level={2}>Create a post</Heading>
      <Field name="_csrf" type="hidden" component="input" />
      <Field name="title" label="Title" component={ReduxField} />
      <Field name="body" label="Body" type="textarea" component={ReduxField} />
      <TextField
        id="text-field-controlled"
        value={this.state.startDate}
        name="startDate"
      />
      <DatePicker
        onChange={this.handleChangeStartDate}
        autoOk={this.state.autoOk}
        floatingLabelText="Start Date"
        defaultDate={this.state.startDate}
      />
      <TextField
        id="text-field-controlled"
        value={this.state.endDate}
        name="endDate"
      />
      <DatePicker
        onChange={this.handleChangeEndDate}
        autoOk={this.state.autoOk}
        floatingLabelText="End Date"
        defaultDate={this.state.endDate}
      />
      <MediaItemInputsList onMediaListChange={onMediaListChange} list={mediaList}></MediaItemInputsList>
      <TagInputsList onTagListChange={onTagListChange} list={tagList}></TagInputsList>
      <Button type="submit" disabled={submitting}>Create</Button>
    </Form>
  )
}

PostForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
}

export default PostForm
