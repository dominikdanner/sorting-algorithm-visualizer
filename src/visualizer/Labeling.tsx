import GitlabLogo from "../public/gitlab-logo.svg"
import Image from "next/image"
import { Fragment, useState } from "react"
import { InformationCircleIcon } from "@heroicons/react/outline"

export const Labeling = () => {
    const [isInfoExpanded, setInfoExpanded] = useState(false)

    return (
        <Fragment>

            {/* Popup */}
            {isInfoExpanded ? (
                <div className="absolute right-8 p-4 top-3 z-50 rounded-md w-[400px] h-fit bg-gray-200 text-center">
                    <h1 className="text-gray-600 font-semibold mb-4">Sorting Algorithm Visualizer Project</h1>
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <h2>Whats this project about?</h2>
                            <p className="text-sm">
                                This project provides an API for implementing sorting algorithms and visualize them in a canvas.
                            </p>
                        </div>
                        <div className="space-y-1">

                            <h2>How to contribute?</h2>
                            <p className="text-sm">
                                You can help by implementing one of many sorting algorithms. Just go to the projects Gitlab Repository. Fork the Project and make a PR.
                            </p>
                        </div>

                    </div>
                </div>
            ): null}

            {/* Gitlab repository button*/}
            <div className="absolute right-8 bottom-3 z-50 rounded-full bg-gray-200 text-center transition-all hover:scale-110">

                <div className="flex h-full w-full items-center justify-center">

                    <a
                        href="https://gitlab.com/dominikdanner/algorithm-visualizer"
                    >
                        <Image
                            src={GitlabLogo}
                            layout="fixed"
                            priority={true}
                            alt="Gitlab Logo"
                            width={60}
                            height={60}
                        />
                    </a>

                </div>

            </div>

            {/* Toogle popup button*/}
            <div
                className=" cursor-pointer absolute right-28 bottom-3 z-50 rounded-full w-16 h-16 bg-gray-200 text-center transition-all hover:scale-110"
                onClick={() => setInfoExpanded(!isInfoExpanded)}
            >
                <span className="flex justify-center items-center w-full h-full">
                    <InformationCircleIcon className="w-10 text-gray-500" />
                </span>
            </div>

        </Fragment>
    )
}
