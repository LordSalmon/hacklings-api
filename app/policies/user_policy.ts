import User from '#models/user'
import { BasePolicy } from '@adonisjs/bouncer'
import { AuthorizerResponse } from '@adonisjs/bouncer/types'
import { Role } from '../enums/role.js'

export default class UserPolicy extends BasePolicy {
    create(user: User): AuthorizerResponse {
        return user.role === Role.ADMIN
      }
}