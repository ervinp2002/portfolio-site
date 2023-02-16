import {createSchema} from 'sanity'
import schemaTypes from 'sanity/sanity.config'
import pageInfo from './pageInfo'
import experience from './experience'
import project from './project'
import skill from './skill'
import social from './social'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([pageInfo, experience, project, skill, social]),
})
