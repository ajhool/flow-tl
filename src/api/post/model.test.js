import { Post } from '.'
import '../../../test/db'

let post

beforeEach(async () => {
  post = await Post.create({ title: 'test', body: 'test', startDate: Date.now(), endDate: null, postDate: Date.now(), media: [{mediaType: 'LINK', infoBlob: {url: 'www.google.com'}}], tags: [{keyword: 'France', score: 15}]})
})

describe('view', () => {
  it('returns simple view', () => {
    const view = post.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(post.id)
    expect(view.title).toBe(post.title)
    expect(view.body).toBe(post.body)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = post.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(post.id)
    expect(view.title).toBe(post.title)
    expect(view.body).toBe(post.body)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
