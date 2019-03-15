import React from 'react';
import PropTypes from 'prop-types';

import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const CustomModal = ({ header, body, isPokemonModalOpen, toggle }) => {

  return (
    <Modal isOpen={isPokemonModalOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        {header}
      </ModalHeader>
      <ModalBody >
        {body}
      </ModalBody>
    </Modal>
  );
};

CustomModal.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropTypes.element.isRequired,
  isPokemonModalOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default CustomModal;
