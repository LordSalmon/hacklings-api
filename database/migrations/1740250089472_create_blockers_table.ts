import { BaseSchema } from '@adonisjs/lucid/schema'
import {Blockertyp} from "../../app/blocker/blockertyp.js";

export default class extends BaseSchema {
  protected tableName = 'blockers'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.enum('blockertyp', [Blockertyp.PRAKTIKUM]).notNullable()
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
