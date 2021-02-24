import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Documents')
    .items([
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('About')
                .child(
                  S.document()
                    .schemaType('about')
                    .documentId('about')
                )
            ])
        ),
      S.listItem()
        .title('Settings')
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('Site Setting')
                .child(
                  S.document()
                    .schemaType('site_setting')
                    .documentId('site_setting')
                ),
              S.listItem()
                .title('URL Redirect')
                .child(
                  S.document()
                    .schemaType('url_redirect')
                    .documentId('url_redirect')
                )
            ])
        ),
      ...S.documentTypeListItems().filter(listItem => !['about', 'site_setting', 'url_redirect'].includes(listItem.getId()))
    ])