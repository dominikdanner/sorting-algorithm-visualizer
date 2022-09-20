import { FC, useContext } from "react"
import { StoreContext } from "../components/Store"
import { useGenerateArray as useGenerateArray } from "../components/Hooks"
import { Button, ControlButton } from "../components/shared/Button"
import { Slider } from "../components/shared/Slider"
import { AlgorithmSelector } from "../components/shared/Selector"
import { ContentSection, KeyValuePair as KeyValuePair } from "../components/shared/Formatting"


export const AlgorithmSettings: FC = () => {
    const state = useContext(StoreContext)
    const generateArray = useGenerateArray()

    const [arrayLenght, setArrayLenght] = state.arrayLength!
    const [altitude, setAltitude] = state.altitude!
    const [timeout, setTimeout] = state.timeout!
    const [started] = state.started!
    const [autoplay] = state.autoplay!

    return (
        <div className="flex min-h-screen flex-col">

            {/* Header */}
            <div className="flex h-[5rem] items-center justify-between bg-slate-700 p-4 text-xl text-white">
                Algorithm Visualizer
            </div>

            <div className="flex flex-grow">

                <div className="z-50 w-[20rem] bg-gray-300 p-4 text-gray-700 shadow-xl">

                    {/* General Controlls */}
                    <div className="space-y-2">

                        <AlgorithmSelector />
                        <ControlButton />

                    </div>

                    <section>

                        {/* General Infomation */}
                        <ContentSection title="Infomation">

                            <KeyValuePair _key="Timeout:" value={`${timeout} ms`} />

                            <KeyValuePair _key="List Elements:" value={arrayLenght.toString()} />

                        </ContentSection>

                        {/* Settings */}
                        <ContentSection title="Settings">

                            {/* Set altitude of array*/}
                            <Slider
                                title="Altitude:"
                                min={51}
                                max={600}
                                step={10}
                                value={altitude}
                                isDisabled={started}
                                onChange={(value) => setAltitude(value)}
                            />

                            {/* Button to randomize dataset */}
                            <Button
                                title="Randomize Dataset"
                                onClick={() => generateArray()}
                            />

                            {/* Speed of animations execution */}
                            <Slider
                                title="Step Interval:"
                                min={0}
                                max={1000}
                                step={10}
                                value={timeout}
                                isDisabled={autoplay}
                                onChange={(value) => setTimeout(value)}
                            />

                            {/* Amout of items in array */}
                            <Slider
                                title="Amount of Items:"
                                min={2}
                                max={50}
                                step={1}
                                value={arrayLenght}
                                isDisabled={started}
                                onChange={(value) => setArrayLenght(value)}
                            />

                        </ContentSection>

                    </section>

                </div>

            </div>

        </div>
    )
}
