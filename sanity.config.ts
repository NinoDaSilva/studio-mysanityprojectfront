import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import { singletonTools } from 'sanity-plugin-singleton-tools'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'MyProject',

  projectId: '4hf66nwd',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), singletonTools()],

  schema: {
    types: schemaTypes,
  },
})
