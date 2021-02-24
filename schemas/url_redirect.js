export default {
    name: 'url_redirect',
    title: 'URL Redirect',
    type: 'document',
    fields: [
        {
          name: 'url_list',
          title: 'URL List',
          type: 'array',
          of: [
            {
                name: 'url_list',
                title: 'URL List',
                type: 'object',
                fields: [
                    {
                        name: "from",
                        title: "From",
                        type: "string"
                    },
                    {
                        name: "to",
                        title: "To",
                        type: "url"
                    },
                    {
                        name: "active",
                        title: "Active",
                        type: "boolean"
                    }
                ]
            }
          ]
        },
    ],
    preview: {
      prepare() {
        return {
          title: "URL Redirect"
        }
      }
    },
}