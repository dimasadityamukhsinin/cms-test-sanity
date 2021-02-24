export default {
    title: 'Rich Text',
    name: 'richText',
    type: 'array',
    of: [
      {
        type: 'block',
      },
      {
        type: 'image',
        fields: [
          {
            title: 'Alt Text',
            name: 'alt',
            type: 'string',
          }
        ],
        options: {hotspot: true},
      }
    ],
  }
  