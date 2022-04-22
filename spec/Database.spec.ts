import { expect } from 'chai'

import { dataSource, connect, close } from './utils/testDataSource'
import { Database } from '../src/Database'

describe('Database', () => {
  before(async () => {
    await connect()
  })

  after(() => { close() })

  describe('.isAdapterFor', () => {
    it('returns true when typeorm DataSource is given', () => {
      expect(Database.isAdapterFor(dataSource)).to.equal(true)
    })
    // Test is irrelevent because isAdapterFor is typed
    // it('returns false for any other data', () => {
    //   expect(Database.isAdapterFor()).to.equal(false)
    // })
  })

  describe('#resources', () => {
    it('returns all entities', async () => {
      expect(new Database(dataSource).resources()).to.have.lengthOf(3)
    })
  })
})
