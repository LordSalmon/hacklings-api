import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class WorktimeEntry extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number

  @column()
  declare name: string

  @column.dateTime()
  declare timeFrom: DateTime

  @column.dateTime()
  declare timeTo: DateTime

  @column.dateTime()
  declare breakFrom: DateTime

  @column.dateTime()
  declare breakTo: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
