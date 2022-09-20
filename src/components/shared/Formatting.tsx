import { FC } from "react"

interface ContentSectionProps {
    title: string
}

export const ContentSection: FC<ContentSectionProps> = ({ title, children }) => (
    <div className="pt-4">

        <h1 className="mb-2 border-b-2 border-b-gray-400 text-lg font-medium text-gray-600 ">
            {title}
        </h1>

        <div className="space-y-3 pl-3">{children}</div>

    </div>
)

interface AttributeValuePairProps {
    _key: string
    value: string
}

export const KeyValuePair: FC<AttributeValuePairProps> = ({ _key, value }) => (
    <span className="flex text-sm">
        <span>{_key}&#160;</span>
        <p>{value}</p>
    </span>
)