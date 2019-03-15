import React from 'react'
import Dropdown from '../Dropdown/Dropdown';

import { Row, Col } from 'reactstrap';

const ActionBar = () => {
  return (
    <Row className="action-bar pb-3 mb-4">
      <Col>
        <Dropdown />
      </Col>
    </Row>
  )
}

export default ActionBar;
