import mongoose, { Schema } from 'mongoose'

const postSchema = new Schema({
  title: {
    type: String,
  },
  body: {
    type: String,
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  postDate: {
    type: Date,
    default: Date.now
  }
  media: [
    {
      title: String,
      icon: String,
      mediaLink: String,
      agencyName: String,
      agencyLink: String
    }
  ],
  tags: [
    {
      keyword: {type: String, default: ''},
      score: {type: Number, default: 0 }
    }
  ]
}, {
  timestamps: true,
})

postSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      title: this.title,
      body: this.body,
      startDate: this.startDate,
      endDate: this.endDate,
      postDate: this.postDate,
      media: this.media,
      tags: this.tags,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    }

    return full ? {
      ...view,
      // add properties for a full view
    } : view
  },
}

module.exports = mongoose.model('Post', postSchema)
export default exports
