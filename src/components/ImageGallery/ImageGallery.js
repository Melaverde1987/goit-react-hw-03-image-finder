import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ListGallery } from './ImageGallery.styled';

/*
export class ImageGallery extends Component {
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
    const { items } = this.props;
    const { isModalOpen } = this.state;
    return (
      <ListGallery className="gallery">
        {items.map(item => (
          <li key={item.id} onClick={this.openModal}>
            <ImageGalleryItem
              className="gallery-item"
              webformatURL={item.webformatURL}
              tags={item.tags}
            ></ImageGalleryItem>

            <Modal
              isOpen={isModalOpen}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <p>Test {item.id}</p>
              <button onClick={this.closeModal}>close</button>
            </Modal>
          </li>
        ))}
      </ListGallery>
    );
  }
}
*/

export const ImageGallery = ({ items }) => {
  return (
    <ListGallery className="gallery">
      {items.map(item => (
        <li key={item.id}>
          <ImageGalleryItem
            className="gallery-item"
            webformatURL={item.webformatURL}
            tags={item.tags}
          ></ImageGalleryItem>
        </li>
      ))}
    </ListGallery>
  );
};
