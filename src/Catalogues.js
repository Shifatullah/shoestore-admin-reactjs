import React from 'react';
import { Table, message } from 'antd';

const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    }
  ];

class Catalogues extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [{"id":1,"name":"dummy data from in-memory","catalogueProducts":null}]
        };
    }

    componentDidMount(){
        fetch("http://138.68.36.194/api/v1/catalogues")
        .then(res => {
            alert(2);
            res.json();
        })
        .then(
            (res) => { 
                this.setState({
                  isLoaded: true,
                  items: res.items
                });
              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              (error) => {
                  message.error(error.toString());
                this.setState({
                  isLoaded: true,
                  error
                });
              }
        );   
    }

    render() {
        return (<Table dataSource={this.state.items} columns={columns} />);
    }
}

export default Catalogues;