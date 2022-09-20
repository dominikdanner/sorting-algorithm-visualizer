import type { NextPage } from "next"
import dynamic from "next/dynamic"
import { StoreProvider } from "../components/Store"
import { Labeling } from "../visualizer/Labeling"
import { AlgorithmSettings } from "../visualizer/SettingsBar"
import { VisualizerCanvas } from "../visualizer/Visualizer"

const Home: NextPage = () => {
    return (
        <StoreProvider>

            <div className="flex">

                <Labeling />

                <AlgorithmSettings />

                <VisualizerCanvas />

            </div>

        </StoreProvider>
    )
}

export default dynamic(() => Promise.resolve(Home), {
    ssr: false,
})
