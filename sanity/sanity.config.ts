import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import pageInfo from './schemas/pageInfo'
import experience from './schemas/experience'
import project from './schemas/project'
import skill from './schemas/skill'
import social from './schemas/social'

const schemaTypes = [
  pageInfo, experience, project, skill, social,
]

export default defineConfig({
  name: 'default',
  title: 'Portfolio',

  projectId: '792wr0f7',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
