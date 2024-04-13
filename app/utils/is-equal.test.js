import { isEqual } from "./is-equal"

describe('isEqual', () => {
    it('result is equal expected', () => {
        const result = isEqual(7,7)
        expect(result).toBe(true)
    })

    it('should return false', () => {
        const result = isEqual(7,5)
        expect(result).toBe(false)
    })
})