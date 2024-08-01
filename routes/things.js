import { Router } from 'express'
import * as thingsCtrl from '../controllers/things.js'

const router = Router()

// GET localhost:3000/users
router.get('/', thingsCtrl.index)
router.get('/new', thingsCtrl.new)
router.get('/:thingId', thingsCtrl.show)
router.get('/:thingId/edit', thingsCtrl.edit)
router.post('/', thingsCtrl.create)
router.delete('/:thingId', thingsCtrl.delete)
router.put('/:thingId', thingsCtrl.update)

export { router }
