import { FC } from "react"

interface SliderProps {
    title: string
    min: number
    max: number
    step: number
    value?: number
    isDisabled?: boolean
    onChange: (value: number) => void
}

export const Slider: FC<SliderProps> = ({
    title,
    max,
    value,
    min,
    step,
    isDisabled,
    onChange,
}) => (
    <span className="flex flex-col space-y-1 text-sm">

        <span className="font-medium">{title}</span>

        <input
            type="range"
            disabled={isDisabled}
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(parseInt(e.target.value))}
        />

    </span>
)