import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { SearchForm } from './SearchForm.styled';

const SignupSchema = Yup.object().shape({
  search: Yup.string().required('Required'),
});

export class Searchbar extends Component {
  render() {
    return (
      <SearchForm>
        <div className="wrapper">
          <Formik
            initialValues={{
              search: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, actions) => {
              this.props.onSubmit(values);
            }}
          >
            <Form>
              <div className="search-item">
                <button type="submit" className="button">
                  <span className="button-label">Search</span>
                </button>
                <label htmlFor="search"></label>
                <Field
                  id="search"
                  name="search"
                  autoComplete="off"
                  className="input"
                  type="text"
                  placeholder="Search images and photos"
                  //value={this.props.inputValue}
                  //onChange={this.props.handleChange}
                />
              </div>
            </Form>
          </Formik>
        </div>
      </SearchForm>
    );
  }
}
