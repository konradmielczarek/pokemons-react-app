import React from 'react'

// COMPONENTS
import Dropdown from '../Dropdown/Dropdown';

// REACTSTRAP
import { Row, Col } from 'reactstrap';

const ActionBar: React.FC = () => (
    <Row className="action-bar pb-3 mb-4">
      <Col>
        <Dropdown />
      </Col>
    </Row>
  )

export default ActionBar;
