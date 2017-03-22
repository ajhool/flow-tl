import React, { PropTypes } from 'react'
import styled from 'styled-components'
import moment from 'moment'

import { Heading, Paragraph } from 'components'

const Article = styled.article``

const Post = ({title, body, startDate, endDate, postDate, media, tags, ...props }) => {
  const startDateStr = moment(startDate).format('MM-DD-YY, h:mm:ss a');

  return (
    <Article {...props}>
      <Heading level={2}>{title + '(' + startDateStr + ')'}</Heading>
      <Paragraph>{body}</Paragraph>
      <MediaItemList list={media}></MediaItemList>
      <TagList list={tags}></TagList>
    </Article>
  )
}


Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default Post
