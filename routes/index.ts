import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { redisClient } from '../src/redis.ts'
import rateLimit from 'express-rate-limit'
const router = express.Router()

router.get('/health', async (req, res) => {
  console.log('[/health]', JSON.stringify(req.fingerprint))
  res.send('OK').end()
})

const limiter = (args?): any => rateLimit({
  windowMs: 1000 * 60,
  max: 300,
  keyGenerator: req => req.fingerprint?.hash ?? '',
  ...args
})

router.get('/*', limiter(), async (req, res) => {
  try {
    const target = await redisClient.get(req.hostname)
    if (!target) {
      return res.status(StatusCodes.NOT_FOUND).json({ hostname: req.hostname, error: 'no target' })
    }
    res.redirect(301, target)
  } catch (ex: any) {
    console.error(ex)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: ex.toString() })
  }
})

export default router
