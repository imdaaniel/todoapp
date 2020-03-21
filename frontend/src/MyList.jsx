import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import { ListGroup } from 'react-bootstrap'

class MyList extends React.Component {
    addItem = item => {
        return <ListGroup.Item key={item.id}>
            <FontAwesomeIcon className="remove" icon={faTrash} onClick={() => {
                this.props.removeItem(item.id)
            }} />
            &emsp;
            {item.titulo}
            {(item['categoria'] !== undefined) ? ` (#${item.categoria})` : ``}
        </ListGroup.Item>
    }
    render() {
        const entries = this.props.entries
        const items = entries.map(this.addItem)

        return <ListGroup>{items}</ListGroup>
    }
}

export default MyList