import React, { Component } from 'react';
import OAuth from './OAuth';
import { socket } from 'components/util/SocketUtil';

const providers = ['google', 'facebook','twitter'];

class NewCustomer extends Component {

  render() {
    return (
      <div className="authentication-forms-container">
				{providers.map(provider => <OAuth provider={provider} key={provider} socket={socket} />)}
      </div>
    );
	}
}

export default NewCustomer
