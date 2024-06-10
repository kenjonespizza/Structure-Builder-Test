import {defineField, defineType} from 'sanity'
import {MdLocalMovies as icon} from 'react-icons/md'
import genres from '../lib/genres'

export default defineType({
  name: 'movie',
  title: 'Movie',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    }),
    defineField({
      name: 'pinned',
      title: 'Pinned',
      type: 'boolean',
    }),
    defineField({
      name: 'genre',
      title: 'Genre',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: genres,
      },
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'blockContent',
    }),
    defineField({
      name: 'releaseDate',
      title: 'Release date',
      type: 'datetime',
    }),
    defineField({
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'externalId',
      title: 'External ID',
      type: 'number',
    }),
    defineField({
      name: 'popularity',
      title: 'Popularity',
      type: 'number',
    }),
    defineField({
      name: 'castMembers',
      title: 'Cast Members',
      type: 'array',
      of: [{type: 'castMember'}],
    }),
    defineField({
      name: 'crewMembers',
      title: 'Crew Members',
      type: 'array',
      of: [{type: 'crewMember'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'releaseDate',
      media: 'poster',
      castName0: 'castMembers.0.person.name',
      castName1: 'castMembers.1.person.name',
      pinned: 'pinned',
    },
    prepare(selection) {
      const year = selection.date && selection.date.split('-')[0]
      const cast = [selection.castName0, selection.castName1].filter(Boolean).join(', ')

      return {
        // title: `${selection.title} ${year ? `(${year})` : ''}`,
        title: `${selection.pinned ? '📌' : ''} ${selection.title} ${year ? `(${year})` : ''}`,
        date: selection.date,
        subtitle: cast,
        media: selection.media,
      }
    },
  },
  // orderings: [
  //   {
  //     title: 'Pinned',
  //     name: 'pinned',
  //     by: [{field: 'pinned', direction: 'asc'}],
  //   },
  //   {
  //     title: 'A -> Z',
  //     name: 'title',
  //     by: [{field: 'title', direction: 'asc'}],
  //   },
  // ],
})
