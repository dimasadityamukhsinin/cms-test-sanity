export default {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    initialValue: () => ({
        date: new Date().toISOString()
    }),
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        description: "Slug is generated from Title, Lower Characters (a-z), Numericals (0-9), dash (-) and must not start with a /, Minimum 3 Characters, eg: 'project-title'",
        options: {
          source: 'title',
          maxLength: 96,
        },
        validation: (Rule) =>
          Rule.custom((slug) => {
            const regex = /^[a-z0-9]{3,}(?:-[a-z0-9]+)*$/
            if (slug.current.match(regex) !== null) {
              return true
            } else {
              return "Not a valid slug"
            }
          }),
      },
      {
        name: "date",
        title: "Date",
        type: "date",
        validation: Rule => Rule.required()
      },
      {
        name: 'cover_image',
        title: 'Cover Image',
        type: 'image',
        fields: [
          {
            title: 'Alt Text',
            name: 'alt',
            type: 'string',
            validation: Rule => Rule.required()
          }
        ],
        validation: Rule => Rule.required()
      },
      {
        name: 'thumb',
        title: 'Thumbnail Image',
        type: 'image',
        fields: [
          {
            title: 'Alt Text',
            name: 'alt',
            type: 'string',
            validation: Rule => Rule.required()
          }
        ],
        validation: Rule => Rule.required()
      },
      {
        title: "Body",
        name: "body",
        type: "richText",
        validation: Rule => Rule.required()
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