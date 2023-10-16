import React, { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { webformatURL, tags } = this.props;
    const { isModalOpen } = this.state;

    return (
      <>
        <img src={webformatURL} alt={tags} onClick={this.openModal} />
        <Modal
          isOpen={isModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img src={webformatURL} alt={tags} />
          <button onClick={this.closeModal}>close</button>
        </Modal>
      </>
    );
  }
}

/*
export const ImageGalleryItem = ({ webformatURL, tags }) => {
  return <img src={webformatURL} alt={tags} />;
};
*/
