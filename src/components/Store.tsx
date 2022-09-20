import {
    FC,
    useState,
    createContext,
    MutableRefObject,
    Dispatch,
    SetStateAction,
    useEffect,
} from "react"
import {
    DEFAULT_ALTITUDE,
    DEFAULT_ARRAY_LENGHT,
    DEFAULT_STEP_INTERVAL,
} from "../constants"
import { genRangeArray } from "../util"
import { SelectionSortVisualizer } from "./algorithm/selectionsort"
import { Visualizer } from "./algorithm/visualizer"

export const StoreContext = createContext<IStoreContext>({})

export enum Algorithm {
    BubbleSort,
    SelectionSort,
}

// Abstract type to add type checking state
type SetStateVisualizer<T extends Visualizer<any>> = [T, Dispatch<SetStateAction<T>>]
type SetState<T> = [T, Dispatch<SetStateAction<T>>]

interface IStoreContext {
    started?: SetState<boolean>
    array?: SetState<number[]>
    timeout?: SetState<number>
    arrayLength?: SetState<number>
    altitude?: SetState<number>
    elementRefs?: SetState<MutableRefObject<HTMLElement>[]>
    animationCount?: SetState<number>, 
    autoplay?: SetState<boolean>, 
    visualizer?: SetStateVisualizer<any> 
}

/**
 * Provider to give access to all states for every componenets
 * @returns 
 */
export const StoreProvider: FC = ({ children }) => {
    const randomArray = genRangeArray(300, 50, DEFAULT_ARRAY_LENGHT)

    const store: IStoreContext = {
        started: useState<boolean>(false),
        autoplay: useState<boolean>(false),
        array: useState(randomArray),
        timeout: useState(DEFAULT_STEP_INTERVAL),
        arrayLength: useState(DEFAULT_ARRAY_LENGHT),
        altitude: useState(DEFAULT_ALTITUDE),
        elementRefs: useState(new Array()),
        animationCount: useState(1),
        visualizer: useState(new SelectionSortVisualizer())
    }

    const [elementRefs] = store.elementRefs!
    const [timeout] = store.timeout!
    const [array] = store.array!
    const [animationCount] = store.animationCount!
    const [visualizer] = store.visualizer!

    // Map all states to the visualizer class
    useEffect(() => visualizer.setTimeoutTime(timeout), [timeout, visualizer])
    useEffect(() => visualizer.setElementRefs(elementRefs), [elementRefs, visualizer])
    useEffect(() => visualizer.setArray(array), [array, visualizer])

    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    )
}
