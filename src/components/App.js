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

  /*
  async componentDidMount() {
    try {
      this.setState({ loading: true, error: false });
      const images = await fetchImages(
        this.state.page,
        this.state.perPage,
        this.state.query
      );
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
  */

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ loading: true, error: false });
        const images = await fetchImages(
          this.state.page,
          this.state.perPage,
          this.state.query
        );

        this.setState(prevState => {
          return {
            imagesItems: [...prevState.imagesItems, ...images.hits],
            loadMore:
              this.state.page <
              Math.ceil(images.totalHits / this.state.perPage),
          };
        });

        /*
        this.setState({
          imagesItems: images.hits,
          loadMore:
            this.state.page < Math.ceil(images.totalHits / this.state.perPage),
        });
        */
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handlerSubmit = evt => {
    //evt.preventDefault();
    //console.log(evt.search);
    this.setState({
      imagesItems: [],
      query: evt.search,
      page: 1,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    console.log(this.state);
    const { imagesItems } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handlerSubmit} />
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

        {this.state.loadMore && (
          <button
            type="button"
            className="btn btn-outline"
            onClick={this.handleLoadMore}
          >
            Load more
          </button>
        )}
      </>
    );
  }
}
