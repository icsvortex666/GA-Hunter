import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import request from 'superagent';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      description: '',
      tagline: '',
      image: '',
      url: '',
      banner: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const stateObj = {};
    const stateKey = e.target.name;

    stateObj[stateKey] = e.target.value;
    this.setState(stateObj);
  }

  handleSubmit(e) {
    e.preventDefault();

    const apiUrl = '/api/projects';
    const { name, description, tagline, image, url, banner } = this.state;

    request.post(apiUrl)
    .send({
      name: name,
      description: description,
      tagline: tagline,
      image: image,
      url: url,
      banner: banner,
    })
    .end(() => {
      this.props.router.push('/');
    });
  }

  render() {
    return (
      <form className="project-form">
        <div className="form-group">
          <label
            htmlFor="name"
          >Project Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-control"
            onChange={this.handleChange}
            autoFocus
            placeholder="ie: Dr. Brown's one-click order button"
            required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="url"
          >Project URL
          </label>
          <input
            id="url"
            name="url"
            type="text"
            className="form-control"
            onChange={this.handleChange}
            placeholder="https://"
            required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="image"
          >Thumbnail image URL
          </label>
          <input
            id="image"
            name="image"
            type="text"
            className="form-control"
            onChange={this.handleChange}
            placeholder="https://"
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="banner"
          >Banner image URL
          </label>
          <input
            id="banner"
            name="banner"
            type="text"
            className="form-control"
            onChange={this.handleChange}
            placeholder="https://"
            required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="tagline"
          >Tagline
          </label>
          <input
            id="tagline"
            name="tagline"
            type="text"
            maxLength="140"
            className="form-control"
            onChange={this.handleChange}
            placeholder="Short 140 char tagline of the project"
            required
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="description"
          >Description
          </label>
          <textarea
            id="description"
            name="description"
            type="text"
            className="form-control form-textarea"
            onChange={this.handleChange}
            placeholder="Some fancy description."
            required
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Submit"
            className="btn btn-danger btn-lg btn-switch btn-block"
            onClick={this.handleSubmit}
          />
        </div>
      </form>
    );
  }
}

export default withRouter(Form);
