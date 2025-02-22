/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import AuthController from '#controllers/auth_controller'
import router from '@adonisjs/core/services/router'

/*
###### AUTHENTICATION ######
*/
router.get('api/v1/auth/login', [AuthController, 'issueToken'])