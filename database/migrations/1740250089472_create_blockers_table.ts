import { BaseSchema } from '@adonisjs/lucid/schema'
import {BLOCKER_TYPE} from "../../app/blocker/blocker_type.js";

export default class extends BaseSchema {
  protected tableName = 'blockers'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.enum('blockertyp', [BLOCKER_TYPE.INTERNSHIP]).notNullable()
      table.timestamp('startTime', { useTz: true }).notNullable()
      table.timestamp('endTime', { useTz: true }).notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
