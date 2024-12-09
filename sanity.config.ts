import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { singletonTools } from 'sanity-plugin-singleton-tools'
import {
  singletonDocumentListItems,
  filteredDocumentListItems,
} from 'sanity-plugin-singleton-tools';
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'MyProject',

  projectId: '4hf66nwd',
  dataset: 'production',

  plugins: [
    visionTool(),
    singletonTools(),
    structureTool({
      structure: (S, context) =>
        S.list()
          .title('Sanity Content')
          .items([
            // Create a list item for each singleton document in your schema that links directly to a document view
            ...singletonDocumentListItems({ S, context }),
            // Create a list item for a specific singleton
            S.divider(),
            // Filter singleton documents out of the default S.documentTypeListItems() to prevent them from being rendered as lists or as duplicates
            ...filteredDocumentListItems({ S, context }),
          ])
    }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
