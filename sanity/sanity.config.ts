import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'CLC',

  projectId: 'k9qzu7ux',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  deployment: {
    appId: 'vhsqb5mm6ocmbaw85qpzgask',
  },
})
