import User from '#models/user';
import type { HttpContext } from '@adonisjs/core/http'
import hash from '@adonisjs/core/services/hash';

export default class AuthController {

    async issueToken({ request, response, auth }: HttpContext) {
        const { email, password } = request.all()
        const user = await User.findBy('email', email);

        if (user === null) {
            return response.notFound('user_not_found')
        }

        if (await hash.verify(user.password, password)) {
            const token = await User.accessTokens.create(user)

            response.cookie('api', token.value!.release(), {
                httpOnly: true
            })
            return response.ok(user)
        }

        return response.badGateway()
    }
}
