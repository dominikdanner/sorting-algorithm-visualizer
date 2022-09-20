
/**
 * Generates an array with random numbers in a given range
 * @param max Maximum possible value
 * @param min Minimum possible value
 * @param size Amount of items to generate
 * @returns 
 */
export const genRangeArray = (max: number, min: number, size: number) =>
    Array.from({ length: size }, () =>
        Math.floor(Math.random() * (max - min + 1) + min)
    )

/**
 * Function that stops execution for a given time
 * @param ms Time to sleep
 * @returns 
 */
export const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Swaps text contents of given nodes in DOM
 * @param node1
 * @param node2
 */
export const swapTextContent = (node1: HTMLElement, node2: HTMLElement) => {
    let temp = node1.textContent
    node1.textContent = node2.textContent
    node2.textContent = temp
}

/**
 * Swap nodes height of given nodes in DOM
 * @param node1
 * @param node2 
 */
export const swapHeight = (node1: HTMLElement, node2: HTMLElement) => {
    let temp = node1.style.height
    node1.style.height = node2.style.height
    node2.style.height = temp
}

/**
 * Swaps height and text content of given nodes in DOM
 * @param node1 
 * @param node2 
 */
export const swapDomElements = (node1: HTMLElement, node2: HTMLElement) => {
    swapTextContent(node1, node2)
    swapHeight(node1, node2)
}

/**
 * Swap two given elements position in array
 * @param array Input array
 * @param i First index to swap
 * @param j Second index to swap
 */
export const swapElements = (array: number[], i: number, j: number) => {
    let tmp = array[i]
    array[i] = array[j]
    array[j] = tmp
}

/**
 * Check if array is sorted
 * @param array Array to check
 * @returns boolean
 */
export const isSorted = (array: number[]): boolean =>
    array.every((v, i, a) => !i || a[i - 1] <= v)
