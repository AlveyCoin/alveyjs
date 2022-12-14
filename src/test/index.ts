import { assert } from "chai"

import { AlveyRPC } from "../AlveyRPC"

export const rpcURL = process.env.ALV_RPC || "http://alvey:test@localhost:3889"

export const rpc = new AlveyRPC(rpcURL)

export const repoData = require("../../solar.development.json")

export async function generateBlock(n = 1) {
  // generate to a throwaway address
  return rpc.rawCall("generatetoaddress", [n, "qUdPrkrdbmWD5m21mKEr5euZpFDsQHWzsG"])
}

export async function assertThrow(
  fn: () => Promise<any>,
  msg?: string,
  report?: (err: any) => void,
) {
  let errorThrown: any = null

  try {
    await fn()
  } catch (err) {
    errorThrown = err
  }

  // assert.erro
  if (errorThrown && report) {
    report(errorThrown)
  }

  assert(
    errorThrown != null,
    msg ? `Expects error to be thrown: ${msg}` : "Expects error to be thrown",
  )

  // assert.isNotNull(errorThrown, )
}
