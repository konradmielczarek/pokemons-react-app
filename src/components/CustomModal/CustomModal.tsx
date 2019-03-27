import React, { ReactElement } from 'react';

// REACTSTRAP
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

interface IProps {
  header?: string,
  body: ReactElement,
  isPokemonModalOpen: boolean,
  toggle: () => void
}

const CustomModal: React.FC<IProps> = ({ header, body, isPokemonModalOpen, toggle }) => (
  <Modal isOpen={isPokemonModalOpen} toggle={toggle}>
    <ModalHeader toggle={toggle}>
      {header}
    </ModalHeader>
    <ModalBody >
      {body}
    </ModalBody>
  </Modal>
);

export default CustomModal;
