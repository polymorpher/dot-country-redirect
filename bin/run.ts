#!/usr/bin/env ts-node-esm
import { httpsServer, httpServer } from '../app.js'
import { type AddressInfo } from 'net'

console.log('Starting web server...')

httpsServer.listen(process.env.HTTPS_PORT ?? 8447, () => {
  const { port, address } = httpsServer.address() as AddressInfo
  console.log(`HTTPS server listening on port ${port} at ${address}`)
})

httpServer.listen(process.env.PORT ?? 3003, () => {
  const { port, address } = httpServer.address() as AddressInfo
  console.log(`HTTP server listening on port ${port} at ${address}`)
})
