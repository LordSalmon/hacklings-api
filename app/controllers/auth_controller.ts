import User from '#models/user';
import type { HttpContext } from '@adonisjs/core/http'
import hash from '@adonisjs/core/services/hash';

export default class AuthController {

    async issueToken({ request, response }: HttpContext) {
        const { email, password } = request.all()
        const user = await User.findBy('email', email);

        if (user === null) {
            return response.badRequest()
        }
        
        if (await hash.verify(user.password, password)) {
            const accessToken = await User.accessTokens.create(user)

            response.cookie('api', accessToken.value!.release(), {
                httpOnly: true
            })
            return response.status(200)
        }
        return response.badRequest()
    }
}
