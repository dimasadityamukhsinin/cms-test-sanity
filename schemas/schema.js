// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import richText from './richText'
import blog from './blog'
import about from './about'
import site_setting from './site_setting'
import url_redirect from './url_redirect'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    richText,
    blog,
    about,
    site_setting,
    url_redirect
  ]),
})
