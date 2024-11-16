import React from 'react';
import axios from 'axios';

class News extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount = () => {
    let id = this.props.match.params.id;

    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then(response => {
        this.setState({
          data: response.data[id - 1],
        });
        console.log(response.data[id - 1]);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  render() {
    const { name, username, email, phone, website } = this.state.data;

    return (
      <div className="col">
        <h1 className="text-success text-center">Profile of the day</h1>

        <div
          className=" p-3 d-block m-auto bg-warning text-white"
          style={{
            width: '25rem',
            backgroundColor: '#F1F1F1',
            borderRadius: '4px',
          }}
        >
          <h4>
            Nom : <span> {name}</span>{' '}
          </h4>
          <img
            className="d-block m-auto"
            src="https://fakeimg.pl/150/"
            alt=""
          />
          <p className="card-text">Pseudo : {username}</p>
          <p className="card-text">Email : {email}</p>
          <p className="card-text">Phone : {phone}</p>
          <p className="card-text">Website : {website}</p>
        </div>
      </div>
    );
  }
}

export default News;
