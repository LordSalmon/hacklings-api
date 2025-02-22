import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import {BLOCKER_TYPE} from "../blocker/blocker_type.js";

export default class Blocker extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare blockertyp: BLOCKER_TYPE

  @column.dateTime()
  declare startTime: DateTime

  @column.dateTime()
  declare endTime: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
