import { FC, useContext } from "react"
import { BubbleSortVisualizer } from "../algorithm/bubblesort"
import { SelectionSortVisualizer } from "../algorithm/selectionsort"
import { Algorithm, StoreContext } from "../Store"

export const AlgorithmSelector: FC = () => {
    const state = useContext(StoreContext)
    const [, setVisualizer] = state.visualizer!

    return (
        <select
            className="w-full rounded-md bg-gray-200 p-2 text-lg outline-none"
            onChange={(e) => {
                let value = e.target.value as unknown as Algorithm

                if (value == Algorithm.SelectionSort) {
                    setVisualizer(new SelectionSortVisualizer())
                } else if (value == Algorithm.BubbleSort) {
                    setVisualizer(new BubbleSortVisualizer())
                }

            }}
        >

            <option value={Algorithm.SelectionSort}>Selection Sort</option>

            <option value={Algorithm.BubbleSort}>Bubble Sort</option>

        </select>
    )
}