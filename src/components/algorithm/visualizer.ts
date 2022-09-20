import { MutableRefObject } from "react";

/**
 * Generic interface for representing a animation frame for visualizing sorting algorithm
 */
export interface Frame<Action, Data extends any[]> {
    action: Action
    idx: Data
}

/**
 * Generic interface that defines strict rules for a class.
 * When implemented the class is able to be animated.
 */
export interface Animatable<Event extends Frame<any, any[]>> {
    precomputeFrames(array: number[]): void
    executeSingleFrame(frameData: Event): void
}

export class Visualizer<Event> {
    public array: number[] = [];
    public animations: Event[] = [];
    public elements: MutableRefObject<HTMLElement>[] = [];
    public timeout: number = 0;
    public animationCounter: number = 1;

    public setArray(array: number[]) {
        this.array = array
    }
    
    public setElementRefs(elements: MutableRefObject<HTMLElement>[]) {
        this.elements = elements
    }

    public setTimeoutTime(timeout: number)  {
        this.timeout = timeout
    }
 
    public setAnimationCount(animationCount: number) {
        this.animationCounter = animationCount
    }

    public clearFrames() {
        if (this.animations.length != 0)
            this.animations = new Array()
    }

    public resetBackgroundOfElements() {
        for (let el of this.elements) {
            el.current.style.backgroundColor = "#7dd3fc"
        }
    }

    private swapTextContent(node1: HTMLElement, node2: HTMLElement) {
        let temp = node1.textContent
        node1.textContent = node2.textContent
        node2.textContent = temp
    }

    private swapHeight(node1: HTMLElement, node2: HTMLElement) {
        let temp = node1.style.height
        node1.style.height = node2.style.height
        node2.style.height = temp
    }

    public swapElements(node1: HTMLElement, node2: HTMLElement) {
        this.swapTextContent(node1, node2)
        this.swapHeight(node1, node2)
    }
    
    public getCurrentFrame(): Event {
        return this.animations[this.animationCounter - 1]
    }

    protected getFrame(animationIndex: number): Event {
        if (animationIndex < 0 && animationIndex > this.animations.length)
            throw new Error("Cannot access animation below index 0 or above the current animations length")
        return this.animations[animationIndex]
    }

    protected getElements(idx: number[]): HTMLElement[] {
        if (idx.length == 1)
            return [this.elements[idx[0]].current]
        return [this.elements[idx[0]].current, this.elements[idx[1]].current]
    }
}
