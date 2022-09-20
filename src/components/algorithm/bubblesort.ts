import { Animatable, Frame, Visualizer } from "./visualizer"

export enum BubbleSortAction {
    Swap,
    Compare,
}

export type BubbleSortFrame = Frame<BubbleSortAction, [number, number]>

export class BubbleSortVisualizer extends Visualizer<BubbleSortFrame> implements Animatable<BubbleSortFrame> {
    /**
     * Simulates sorting algorithms and stores all steps inside a animation buffer
     */
    public precomputeFrames() {
        let array = [...this.array]
        let length = this.array.length

        let animationBuffer: BubbleSortFrame[] = new Array()

        for (let i = 1; i < length; i++) {
            for (let j = 1; j <= length; j++) {

                animationBuffer.push({
                    action: BubbleSortAction.Compare,
                    idx: [j - 1, j],
                })

                if (array[j - 1] > array[j]) {

                    // Swap compared values
                    animationBuffer.push({
                        action: BubbleSortAction.Swap,
                        idx: [j - 1, j],
                    })

                    let tmp = array[j]
                    array[j] = array[j - 1]
                    array[j - 1] = tmp
                }
            }
        }

        this.animations = animationBuffer
    }

    /**
     * Parses given frame and performes animation
     * @param frameData
     */
    public executeSingleFrame(frameData: BubbleSortFrame) {
        const { action, idx } = frameData 

        if (action == BubbleSortAction.Swap) {
            const [element1, element2] = this.getElements(idx)
            this.swapElements(element1, element2)
        } else if (action == BubbleSortAction.Compare) {}
        
        this.animationCounter++
    }

}