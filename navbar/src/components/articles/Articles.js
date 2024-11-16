import React from 'react';
import dataTable from '../data/data';
import elvis from '../../images/elvis.png';

class Articles extends React.Component {
  //Constructor
  constructor(props) {
    super(props);

    //The state of the component
    this.state = {
      id: null,
      data: [],
    };
  }

  componentDidMount = () => {
    const newDataTable = [...dataTable];
    this.setState({ id: this.props.match.params.id, data: newDataTable });
    console.log(newDataTable);
  };

  render() {
    const filteredData = this.state.data.filter(
      //eslint-disable-next-line eqeqeq
      item => item.id == this.state.id
    );
    console.log(filteredData);
    return (
      <div className="col text-center">
        <h1 className="text-success">Profile n° {this.state.id}</h1>

        {filteredData.length > 0 &&
          filteredData.map((data, index) => {
            return (
              <div
                key={index}
                className="card db-block bg-warning text-white p-4 m-auto mb-5 mt-5"
                style={{ width: '25rem', textAlign: 'left' }}
              >
                <h4 className="text-bold">
                  <img
                    style={{
                      width: '190px',
                      height: '180px',
                      margin: '0 auto',
                      display: 'block',
                    }}
                    src={elvis}
                    alt="elvis"
                  />
                  <br />
                  Name :{' '}
                  <span>
                    {data.first_name} {data.last_name}
                  </span>
                </h4>
                <p className="card-text">Email : {data.email}</p>
                <p className="card-text">Gender : {data.gender}</p>
                <p className="card-text">Ip address : {data.ip_address}</p>
              </div>
            );
          })}
      </div>
    );
  }
}

export default Articles;
