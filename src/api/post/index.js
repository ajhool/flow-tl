import { Router } from 'express'
import { middleware as querymen } from 'querymen'
import { middleware as bodymen } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'

const router = new Router()
const { title, body, startDate, endDate, postDate, media, tags } = schema.tree

router.post('/',
  bodymen(
    { title,
      body,
      startDate,
      endDate,
      postDate,
      media,
      tags
    }),
  create)

router.get('/',
  querymen(),
  index)

router.get('/:id',
  show)

router.put('/:id',
  bodymen({ title, body, startDate, endDate, postDate, media, tags }),
  update)

router.delete('/:id',
  destroy)

export Post, { schema } from './model'

export default router
