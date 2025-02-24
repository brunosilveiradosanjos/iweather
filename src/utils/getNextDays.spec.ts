import { getNextDays } from "./getNextDays";

describe('getNextdays', () => {
    it('Should return the next five days', () => {
        const days = getNextDays()
        expect(days.length).toBe(5)
    })
})