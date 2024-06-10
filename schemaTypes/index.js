import blockContent from './blockContent'
import crewMember from './crewMember'
import castMember from './castMember'
import genre from './genre'
import movie from './movie'
import person from './person'
import screening from './screening'
import plotSummary from './plotSummary'
import plotSummaries from './plotSummaries'

export const schemaTypes = [
  // Document types
  movie,
  person,
  screening,
  genre,

  // Other types
  blockContent,
  plotSummary,
  plotSummaries,
  castMember,
  crewMember,
]
