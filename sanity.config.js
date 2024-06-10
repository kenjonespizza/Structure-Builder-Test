import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {customStructure} from './structure'

export default defineConfig({
  name: 'default',
  title: 'Pinned Movies',

  projectId: 'w7u3f0co',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: customStructure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
