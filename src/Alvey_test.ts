import "mocha"

import { assert } from "chai"

import { rpcURL, repoData } from "./test"
import { Alvey } from "./Alvey"
import { Contract } from "./Contract"

describe("Alvey", () => {
  const alvey = new Alvey(rpcURL, repoData)

  it("can instantiate a contract", () => {
    const contract = alvey.contract("test/contracts/Methods.sol")
    assert.instanceOf(contract, Contract)
  })

  it("throws an error if contract is not known", () => {
    // assertThrow
    assert.throw(() => {
      alvey.contract("test/contracts/Unknown.sol")
    })
  })
})
