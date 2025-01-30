import { Router } from 'express'
import {allTask, getTask} from '../controller/eth.controller.ts'
const router = Router()

router.route("/eth/:_id").post(getTask)
router.route("/eth/all").get(allTask)

export default router
