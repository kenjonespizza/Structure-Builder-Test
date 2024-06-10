import genres from '../lib/genres'
import {MdOutlinePushPin} from 'react-icons/md'

export const customStructure = (S) => {
  return S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('All Movies')
        .child(
          S.documentList('movie')
            .filter('_type == "movie"')
            .title('Movies')
            .defaultOrdering([{field: 'pinned', direction: 'asc'}]),
          // .defaultOrdering([{field: 'title', direction: 'asc'}]), // This also doesnt work
        ),

      // The rest of this document is from the original manual grouping in this series of articles
      // ...S.documentTypeListItems().filter(
      //   (listItem) => !['siteSettings', 'navigation', 'colors', 'movie'].includes(listItem.getId()),
      // ),
    ])
}
