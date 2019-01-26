import React from 'react'
import { connect } from 'react-redux'

const AuthContext = React.createContext()

class MyProvider extends React.Component {

  render() {
		console.log('ME DESPERTE !!!');
    return (
      <AuthContext.Provider
        value={{
          isLoggedIn: this.props.isLoggedIn,
					isAdmin: this.props.isAdmin,
					error: this.props.error
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

const mapStateToProps = state => ({
	loggedin: state.userSessionReducer.isLoggedIn,
	isadmin: state.userSessionReducer.isAdmin,
	error: state.userSessionReducer.error
})

const AuthProvider = connect(mapStateToProps, null)(MyProvider);
const AuthConsumer = AuthContext.Consumer

export { AuthProvider, 
	AuthConsumer }
