import { swapElements } from "../../util"
import { Frame, Animatable, Visualizer } from "./visualizer"

export enum SelectionSortAction {
    Swap,
    FoundMin,
}

export type SelectionSortFrame = Frame<SelectionSortAction, number[]>

export class SelectionSortVisualizer extends Visualizer<SelectionSortFrame> implements Animatable<SelectionSortFrame> {

    /**
     * Simulates sorting algorithms and stores all steps inside a animation buffer
     */
    public precomputeFrames() {
        let array = [...this.array]
        let length = array.length

        let animationBuffer: SelectionSortFrame[] = new Array()

        for (let i = 0; i < length; i++) {
            let min = i
            for (let j = i + 1; j < length; j++) {
                if (array[j] < array[min]) {

                    animationBuffer.push({
                        action: SelectionSortAction.FoundMin,
                        idx: [i, j],
                    })

                    min = j
                }
            }

            if (min != i) {

                animationBuffer.push({
                    action: SelectionSortAction.Swap,
                    idx: [i, min],
                })

                let tmp = array[i]
                array[i] = array[min]
                array[min] = tmp
            }
        }

        this.animations = animationBuffer
    }

    /**
     * Parses given frame and performes animation
     * @param frameData
     */
    public executeSingleFrame(frameData: SelectionSortFrame) {
        const { action, idx } = frameData

        if (action == SelectionSortAction.Swap) {
            const lastIdx = this.getFrame(this.animationCounter - 2)?.idx
            const [lastMinElement] = this.getElements(lastIdx)
            lastMinElement.style.backgroundColor = "#7dd3fc"

            const [selectedElement, minElement] = this.getElements(idx)
            this.swapElements(selectedElement, minElement)
        } else if (action == SelectionSortAction.FoundMin) {
            const lastIdx = this.getFrame(this.animationCounter - 2)?.idx
            if (!lastIdx) return this.animationCounter++
            const [, lastMinElement] = this.getElements(lastIdx)
            lastMinElement.style.backgroundColor = "#7dd3fc" 

            const [selectedElement, minElement] = this.getElements(idx)
            selectedElement.style.backgroundColor = "#f53b3b"
            minElement.style.backgroundColor = "#258581"
        }

        this.animationCounter++
    }

}