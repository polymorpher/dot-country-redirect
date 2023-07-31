import { createClient, type RedisClientType } from 'redis'
import config from '../config.ts'

export let redisClient: RedisClientType<any, any, any>

export const initRedis = async (): Promise<boolean> => {
  if (redisClient === undefined) {
    console.log(`Connecting redis to ${config.redis.url}`)
    redisClient = createClient({ url: config.redis.url })
    await redisClient.connect()
  }
  return redisClient.isReady
}

export const testRedis = async (): Promise<void> => {
  const testRes = await redisClient.keys('*')
  console.log(testRes)
}
