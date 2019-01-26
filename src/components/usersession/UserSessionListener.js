import { connect } from 'react-redux'
import React, { Component } from 'react';

function UserSessionListener(props) {
	console.log('LLEGOOOO!');
}


const mapStateToProps = state => ({
	response: state.loginReducer.response,
	waiting: state.loginReducer.waiting,
	error: state.loginReducer.error
})

export default connect(mapStateToProps, null)(UserSessionListener);
