import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './src/sanity/schema'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  basePath: '/studio',
  name: 'default',
  title: 'Pramanika Legal CMS',

  projectId,
  dataset,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Insights')
              .child(
                S.documentTypeList('blogPost').title('Insights')
              ),
            S.listItem()
              .title('Practice Areas')
              .child(
                S.documentTypeList('practiceArea').title('Practice Areas')
              ),
            S.divider(),
            S.listItem()
              .title('Categories')
              .child(
                S.documentTypeList('category').title('Categories')
              ),
          ]),
    }),
    visionTool(),
  ],

  schema,
})
