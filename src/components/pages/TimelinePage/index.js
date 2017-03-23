import React from 'react'
import Helmet from 'react-helmet'

import { PageTemplate, Header, Footer, FilterBuilder } from 'components'
import { PostForm, PostList } from 'containers'

const TimelinePage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Helmet title="Timeline" />
      <FilterBuilder list=["Main Story", "Secondary Key"]/>
      <PostList limit={50} />
    </PageTemplate>
  )
}

export default TimelinePage
