import { FC, Fragment, LegacyRef, useContext, useEffect, useState } from "react"
import { useCollectElementRefs } from "../components/Hooks"
import { StoreContext } from "../components/Store"

export const VisualizerCanvas: FC = () => {
    const elementRefs = useCollectElementRefs()
    const state = useContext(StoreContext)
    const [array] = state.array!

    return (
        <div className="bg-grid flex w-full flex-grow flex-row items-end justify-center space-x-1 bg-slate-100">

            {array.map((height: number, idx: number) => (

                <p
                    ref={elementRefs[idx] as LegacyRef<HTMLParagraphElement>}
                    style={{height}}
                    className="translate transition-all transform bg-sky-300 text-center text-xs text-gray-700 w-5 duration-[50ms]"
                    key={idx}
                >
                    {height}
                </p>

            ))}

        </div>
    )
}
