import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'worktime_entries'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('user_id').notNullable().unsigned().references('id').inTable('users')
      table.string('name').notNullable().defaultTo('Schicht')
      table.timestamp('time_from').notNullable()
      table.timestamp('time_to').notNullable()
      table.timestamp('break_from').nullable()
      table.timestamp('break_to').nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
