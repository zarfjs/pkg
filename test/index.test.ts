import { describe, expect, it } from 'bun:test'
import { sayHello } from '../src'

describe('pkg', () => {
    describe('hello', () => {
        it('sayHello should return the provided name with a hello', () => {
            expect(sayHello("John")).toBe("Hello, John!")
        })
    })
})
