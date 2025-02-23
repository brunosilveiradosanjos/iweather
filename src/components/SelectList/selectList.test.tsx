import { fireEvent, render, screen } from "@testing-library/react-native"
import { SelectList } from "@components/SelectList"

describe('Component: SelectList', () => {
    it('should be return city details', () => {
        const data = [
            { id: '1', name: 'Campinas', latitude: 123, longitude: 456 },
            { id: '2', name: 'Campo Grande', latitude: 789, longitude: 987 }
        ]

        const onPress = jest.fn()

        render(
            <SelectList
                data={data}
                onChange={() => { }}
                onPress={onPress}
            />
        )

        const selectedCity = screen.getByText(/campo/i)
        fireEvent.press(selectedCity)

        // expect(onPress).toHaveBeenCalledTimes(1)
        expect(onPress).toHaveBeenCalledWith(data[1])
    })

    it('should not be show when data props is empty', () => {
        render(
            <SelectList
                data={[]}
                onChange={() => { }}
                onPress={() => { }}
            />
        )
        const options = screen.getByTestId('options-test-id')
        expect(options.children).toHaveLength(0)
    })
})