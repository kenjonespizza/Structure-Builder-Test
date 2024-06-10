import genres from '../lib/genres'
import {MdOutlinePushPin} from 'react-icons/md'

export const customStructure = (S) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Movies')
        .child(
          S.list()
            .title('Movies')
            .items([
              S.listItem()
                .title('Pinned')
                .icon(MdOutlinePushPin)
                .child(
                  S.documentTypeList('movie')
                    .title('Movies')
                    .filter('_type == "movie" && pinned')
                    .defaultOrdering([{field: 'pinned', direction: 'desc'}]),
                ),
              ...genres.map((genre) =>
                S.listItem()
                  .title(genre.title)
                  .child(
                    S.documentTypeList('movie')
                      .title('movies')
                      .filter('_type == $type  && $genre in genre')
                      .params({type: 'movie', genre: genre.value})
                      .apiVersion('2024-06-08')
                      .defaultOrdering([{field: 'pinned', direction: 'asc'}]),
                  ),
              ),

              S.listItem()
                .title('All Movies')
                .child(
                  S.list()
                    .title('Settings Documents')
                    .items([
                      S.documentTypeList('movie')
                        .title('Movies')
                        .filter('_type == "movie" && pinnned')
                        .defaultOrdering([{field: 'title', direction: 'asc'}]),
                      // S.divider(),
                      // S.documentTypeList('movie')
                      //   .title('Movies')
                      //   .filter('_type == "movie" && !pinned')
                      //   .defaultOrdering([{field: 'title', direction: 'asc'}]),
                    ]),
                ),
            ]),
        ),

      // The rest of this document is from the original manual grouping in this series of articles
      ...S.documentTypeListItems().filter(
        (listItem) => !['siteSettings', 'navigation', 'colors'].includes(listItem.getId()),
      ),
      S.listItem()
        .title('Settings')
        .child(
          S.list()
            .title('Settings Documents')
            .items([
              S.listItem()
                .title('Metadata')
                .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
              S.listItem()
                .title('Site Colors')
                .child(S.document().schemaType('colors').documentId('colors')),
              S.listItem()
                .title('Main Navigation')
                .child(S.document().schemaType('navigation').documentId('navigation')),
            ]),
        ),
    ])
