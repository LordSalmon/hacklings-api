import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'invitation_links'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('identifier').notNullable().unique()
      table.integer('issued_user').notNullable()
      table.boolean('expired').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
