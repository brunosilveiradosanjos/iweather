import { getWeatherByCityService } from '@services/getWeatherByCityService'
import { mockWeatherAPIResponse } from '@__tests__/mocks/api/mockWeatherAPIResponse'
import { api } from '@services/api'

describe('API: getWeatherByCityService', () => {
    it('should be return weather api data formated', async () => {
        jest.spyOn(api, 'get').mockResolvedValue({ data: mockWeatherAPIResponse })
        const response = await getWeatherByCityService({ latitude: 123, longitude: 456 })
        expect(response).toHaveProperty('today')
    })
})