import type { HttpContext } from '@adonisjs/core/http'
import User from "#models/user"
import UserPolicy from '#policies/user_policy'

export default class UsersController {

    async create({ request, response, auth, bouncer }: HttpContext) {
        const reqUser = auth.user
        
        if (await bouncer.with(UserPolicy).denies('create')) {
            return response.forbidden('cannot create user')
        }

        const data = request.all()
        const user = await User.findBy('email', data.email);

        if (user != null) {
            return response.badRequest('email_already_exists')
        }

        const newUser = new User()

        newUser.firstName = data.firstName
        newUser.lastName = data.lastName
        newUser.email = data.email

        await newUser.save()

        return response.ok('created')
    }

}