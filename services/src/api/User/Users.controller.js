import { Router } from 'express'
import { createUser } from './Users.service'

const router = Router()
export { router as users }

router.post('/', async (req, res) => {
  try {
    const firstName = await createUser(req.body.firstName)
    res.status(200).json(firstName)
  } catch(e) {
    res.status(400).json(e)
  }
})