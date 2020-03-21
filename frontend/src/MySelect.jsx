import React from 'react'

import { FormControl } from 'react-bootstrap'

class MySelect extends React.Component {
    addItem = item => {
        return <option key={item.id} value={item.id}>
            {item.titulo}
        </option>
    }
    render() {
        const entries = this.props.entries
        const options = entries.map(this.addItem)

        return <FormControl as="select" onChange={this.props.change}>{options}</FormControl>
    }
}

export default MySelect