import React from 'react'

import { Button } from 'react-bootstrap'

function MyButton(props) {
    return (
        <Button onClick={props.onClick}>{props.value}</Button>
    )
}

export default MyButton