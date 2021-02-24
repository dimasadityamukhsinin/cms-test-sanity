export default {
    name: 'site_setting',
    title: 'Site Setting',
    type: 'document',
    fields: [
        {
          name: 'color',
          title: 'Color',
          type: 'color'
        },
        {
          name: 'web_name',
          title: 'Web name',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'deploy_status',
          title: 'Deploy Status Password',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'object_test',
          title: 'Object Test',
          type: 'object',
          fields: [
            {
                name: 'name',
                title: 'Name',
                type: 'string',
                validation: Rule => Rule.required()
            },
            {
                name: 'second_field',
                title: 'Second Field',
                type: 'string',
                validation: Rule => Rule.required()
            }
          ]
        }
    ],
    preview: {
      prepare() {
        return {
          title: "Site Setting"
        }
      }
    },
}