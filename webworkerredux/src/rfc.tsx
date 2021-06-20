import React, { FunctionComponent, useState } from 'react'

export interface RFCProps {
    value: string,
    anotherValue?: string
}

const RFC: FunctionComponent<RFCProps> = (props) => {
    const [val, setValue] = useState('')
    return (<h1>This is typescript version of functional component { props.value}</h1>)
}

export default RFC