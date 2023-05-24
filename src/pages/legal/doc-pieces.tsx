import { PropsWithChildren } from "react"

export const InShort = (props: PropsWithChildren<{}>) => {
    return (
        <p>
            <b><i>In Short:</i></b> {props.children}
        </p>
    )
}

export const SectionTitle = (props: PropsWithChildren<{}>) => {
    return (
        <h2>
            {props.children}
        </h2>
    )
}