import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

import { schemaTypes } from '@/sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'IASPE',

  basePath: '/studio',

  projectId: 'cbvw3xbf',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
