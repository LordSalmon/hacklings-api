import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import {Blockertyp} from "../blocker/blockertyp.js";

export default class Blocker extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare blockertyp: Blockertyp

  @column.dateTime()
  declare startTime: DateTime

  @column.dateTime()
  declare endTime: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
