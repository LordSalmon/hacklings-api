/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import AuthController from '#controllers/auth_controller'
import UsersController from '#controllers/users_controller'
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

/*
###### AUTHENTICATION AND USER ######
*/
router.post('/api/v1/auth/login', [AuthController, 'issueToken'])
router.post('/api/v1/user/create', [UsersController, 'create']).use(middleware.auth())