import { sizeWidth } from "@mui/system"
import { createRef, useContext, useEffect, useRef, useState } from "react"
import { DEFAULT_MIN_ALTITUDE } from "../constants"
import { genRangeArray } from "../util"
import { StoreContext } from "./Store"

/**
 * Custom Hook for regenerating array based on states:
 * @var ArrayLength
 * @var Altitude
 * @returns
 */
export const useGenerateArray = () => {
    const state = useContext(StoreContext)

    const [, setArray] = state.array!
    const [arrayLength] = state.arrayLength!
    const [altitude] = state.altitude!

    useEffect(() => {

        const array = genRangeArray(altitude, 50, arrayLength)
        setArray(array)

    }, [arrayLength, altitude])

    // Function for generating new array
    const generateArray = () => {
        const generatedArray = genRangeArray(
            altitude,
            DEFAULT_MIN_ALTITUDE,
            arrayLength
        )

        setArray(generatedArray)
    }

    return generateArray
}

/**
 * Hook that helps collecting all refs from DOM elements
 * @returns
 */
export const useCollectElementRefs = () => {
    const state = useContext(StoreContext)

    const [elementRefs, setElementRefs] = state.elementRefs!
    const [arrayLength] = state.arrayLength!

    useEffect(() => {

        // Create array of empty refs
        setElementRefs((elRefs: any) =>
            Array(arrayLength)
                .fill(null, 0, arrayLength)
                .map((_, i) => elRefs[i] || createRef())
        )

    }, [arrayLength])

    return elementRefs
}

/**
 * Hook for controlling the animations
 * @returns
 */
export const useAnimationController = () => {
    const state = useContext(StoreContext)

    const [animationCounter, setAnimationCounter] = state.animationCount!
    const [started, setStarted] = state.started!
    const [visualizer] = state.visualizer!
    const [autoplay, setAutoplay] = state.autoplay!

    const timer = useRef<any>();

    useEffect(() => {
        let frame = visualizer.getCurrentFrame();

        // Check if animation is finished
        if(!frame) return setStarted(false)

        visualizer.executeSingleFrame(frame)
    }, [animationCounter])

    useEffect(() => {
        if (autoplay) {

            timer.current = setInterval(() => {
                setAnimationCounter((oldState) => oldState + 1)
            }, visualizer.timeout)

        } else {
          clearInterval(timer.current)
        }
    }, [autoplay])

    useEffect(() => {
        if (started) {
            visualizer.precomputeFrames()
        } else {
            visualizer.setAnimationCount(1)
            visualizer.clearFrames()
            visualizer.resetBackgroundOfElements()
            setAutoplay(false);
        }
    }, [started])

    const skipFrame = () => setAnimationCounter((oldState) => oldState + 1)
    const toogleAutoplay = () => setAutoplay(!autoplay)
    const stopAnimation = () => setStarted(false)
    const startAnimation = () => setStarted(true)

    return {
        skipFrame,
        toogleAutoplay,
        stopAnimation,
        startAnimation
    }
}