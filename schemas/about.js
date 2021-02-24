export default {
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        title: "Description",
        name: "description",
        type: "string",
        validation: Rule => Rule.required()
      },
      {
        title: "Description 2",
        name: "description2",
        type: "string",
        validation: Rule => Rule.required()
      },
      {
        name: 'image',
        title: 'Image About',
        type: 'image',
        fields: [
          {
            title: 'Name',
            name: 'name',
            type: 'string',
          }
        ],
      },
      {
        name: "content",
        title: "Array Content",
        type: "array",
        of:[
          {
            name: "content",
            title: "Array Content",
            type: "object",
            fields: [
                {
                    title: 'Title',
                    name: 'title',
                    type: 'string',
                    validation: Rule => Rule.required()
                },
                {
                    title: 'Content',
                    name: 'content',
                    type: 'string',
                    validation: Rule => Rule.required()
                }
            ]
          }
        ]
      },
      {
        name: "order",
        title: "Order",
        type: "number",
        hidden: true,
      }
    ],
  
    preview: {
      select: {
        title: 'title',
        media: 'thumb'
      }
    },
}