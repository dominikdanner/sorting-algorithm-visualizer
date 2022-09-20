import { FC, Fragment, useContext, useEffect, useRef } from "react"
import { useAnimationController, useGenerateArray } from "../Hooks"
import { StoreContext } from "../Store"
import { PlayIcon } from "@heroicons/react/outline"

interface ControlButtonProps {}

export const ControlButton: FC<ControlButtonProps> = () => {
    const state = useContext(StoreContext)
    const [started] = state.started!
    const [autoplay] = state.autoplay!
    const { skipFrame, stopAnimation, toogleAutoplay, startAnimation } = useAnimationController()
    const generateArray = useGenerateArray()

    return started ? (
        <Fragment>

            <div className="flex flex-row">

                <button
                    onClick={() => {
                        stopAnimation()
                        generateArray()
                    }}
                    className="h-8 w-full rounded-tl-md rounded-bl-md bg-red-400 px-6 text-white transition-all hover:scale-100"
                >
                    Cancel
                </button>

                <button
                    onClick={() => skipFrame()}
                    className="h-8 w-full rounded-tr-md rounded-br-md bg-orange-300 px-6 text-white transition-all hover:scale-100"
                    disabled={autoplay}
                >
                    Skip
                </button>

            </div>

            <div>

                <button
                        onClick={() => toogleAutoplay()}
                        className={`h-8 w-full rounded-tr-md rounded-br-md rounded-md px-6 text-white transition-all hover:scale-100 ${autoplay ? "bg-orange-300" : "bg-green-400"}`}
                >
                        {autoplay ? "Pause" : "Play"}
                </button>

            </div>

        </Fragment>
    ) : (

        <button
            onClick={() => startAnimation()}
            className="flex justify-center items-center space-x-1 mt-2 h-8 w-full rounded-lg bg-blue-400 px-6 text-white transition-all hover:scale-105 hover:shadow-lg"
        >
            <p>
                Start
            </p>
            <PlayIcon className="h-5 w-5" />
        </button>

    )
}

interface ButtonProps {
    title: string
    onClick: () => void
}

export const Button: FC<ButtonProps> = ({ title, onClick }) => {
    const state = useContext(StoreContext)
    const [started] = state.started!

    return (

        <button
            disabled={started}
            onClick={() => onClick()}
            className={`mt-2 h-8 w-full rounded-lg transition-all hover:scale-105 hover:shadow-lg ${
                started ? "cursor-not-allowed bg-blue-300" : "bg-blue-400"
            } px-6 font-medium text-white`}
        >
            {title}
        </button>

    )
}