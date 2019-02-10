import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
// import io from 'socket.io-client';
// import {API_URL} from 'config';
import OAuth from './OAuth';

// const socket = io(API_URL);
import { socket } from 'components/util/SocketUtil';

const providers = ['google', 'facebook'];


class NewCustomer extends Component {

  render() {

		console.log('SOCKET ID:'+socket.id);

    return (
      <div className="authentication-forms-container">
				{providers.map(provider => 
					<OAuth provider={provider} key={provider} socket={socket} />
				)}
      </div>
    );
	}
}

export default NewCustomer
