import factory from '@adonisjs/lucid/factories'
import WorktimeEntry from '#models/worktime_entry'

export const WorktimeEntryFactory = factory
  .define(WorktimeEntry, async ({ faker }) => {
    return {}
  })
  .build()