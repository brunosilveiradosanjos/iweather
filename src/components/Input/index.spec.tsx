import { render, screen } from '@testing-library/react-native'
import { Input } from '@components/Input'

describe('Component: Input', () => {
    it('Should be render without activity indicator if isLoading prop is undefined', () => {
        render(<Input />)
        const activityIndicator = screen.queryByTestId('activity-indicator-id')
        expect(activityIndicator).toBeNull()
    })
    it('Should be render with activity indicator if isLoading prop is true', () => {
        render(<Input isLoading />)
        const activityIndicator = screen.getByTestId('activity-indicator-id')
        expect(activityIndicator).toBeTruthy()
    })
})