import React, { Component } from 'react';
import { RevolvingDot } from 'react-loader-spinner';
//import { nanoid } from 'nanoid';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from 'api';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    perPage: 12,
    imagesItems: [],
    loading: false,
    error: false,
    loadMore: false,
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true, error: false });
      const images = await fetchImages(this.state.page, this.state.perPage);
      this.setState({
        imagesItems: images.hits,
        loadMore:
          this.state.page < Math.ceil(images.totalHits / this.state.perPage),
      });
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => prevState.page + 1);
  };

  render() {
    console.log(this.state.imagesItems);
    const { imagesItems, loading, error } = this.state;
    return (
      <>
        <Searchbar />
        {this.state.imagesItems.length > 0 && (
          <ImageGallery items={imagesItems} />
        )}
        {this.state.loading && (
          <RevolvingDot
            radius="45"
            strokeWidth="5"
            color="red"
            secondaryColor="green"
            ariaLabel="revolving-dot-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        )}

        <button
          type="button"
          className="btn btn-outline"
          onClick={this.handleLoadMore}
        >
          Load more
        </button>
      </>
    );
  }
}
