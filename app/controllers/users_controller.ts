import type { HttpContext } from '@adonisjs/core/http'
import User from "#models/user"

export default class UsersController {

    async create({ request, response, auth }: HttpContext) {
        const data = request.all()
        const user = await User.findBy('email', data.email);

        if (user != null) {
            return response.badGateway('email_already_exists')
        }

        const newUser = new User()

        newUser.firstName = data.firstName
        newUser.lastName = data.lastName
        newUser.email = data.email

        await newUser.save()

        return response.ok('created')
    }

}