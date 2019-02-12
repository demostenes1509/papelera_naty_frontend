import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import { API_URL } from 'config'
import { raiseTokenAction } from 'components/util/SessionUtil'
import { withRouter } from 'react-router-dom';
import userSessionActions from 'components/usersession/userSessionActions'
import { connect } from 'react-redux'

class OAuth extends Component {
  
  state = {
    user: {},
    disabled: ''
  }  

  componentDidMount() {
    const { socket, provider } = this.props

    socket.on(provider, response => {  
			console.log(JSON.stringify(response));
			// this.popup.close()
			
			const check = setInterval(() => {
				if (this.popup) {
					clearInterval(check)
					this.popup.close();

					const { token } = response;
					raiseTokenAction(token, this.props.loggedIn,null);
				}
			}, 1000);

      // this.setState({user})
    })
  }

  checkPopup() {
    const check = setInterval(() => {
      const { popup } = this
      if (!popup || popup.closed || popup.closed === undefined) {
        clearInterval(check)
        this.setState({ disabled: ''})
      }
    }, 1000)
  }

  openPopup() {
    const { provider, socket } = this.props
    const width = 600, height = 600
    const left = (window.innerWidth / 2) - (width / 2)
		const top = (window.innerHeight / 2) - (height / 2)
		const url = `${API_URL}/auth/${provider}?socketId=${socket.id}`
		console.log(url);

    return window.open(url, '',       
      `toolbar=no, location=no, directories=no, status=no, menubar=no, 
      scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
      height=${height}, top=${top}, left=${left}`
    )
  }

  startAuth = () => {
    if (!this.state.disabled) {
      this.popup = this.openPopup()  
      this.checkPopup()
      this.setState({disabled: 'disabled'})
    }
  }

  closeCard = () => {
    this.setState({user: {}})
  }

  render() {
    const { name, photo} = this.state.user
    const { provider } = this.props
    const { disabled } = this.state
    const atSymbol = provider === 'twitter' ? '@' : ''
    
    return (
      <div>
        {name
          ? <div className='card'> 
              <img src={photo} alt={name} />
              <FontAwesome
                name='times-circle'
                className='close'
                onClick={this.closeCard}
              />
              <h4>{`${atSymbol}${name}`}</h4>
            </div>
          : <div className='button-wrapper fadein-fast'>
              <button 
                onClick={this.startAuth} 
                className={`${provider} ${disabled} button`}
              >
                <FontAwesome
                  name={provider}
                />
              </button>
            </div>
        }
      </div>
    )
	}
	
	componentWillReceiveProps(nextprops) {
		const { loggedin } = nextprops;
		if(loggedin && loggedin!==this.props.loggedin) {
			this.props.history.push({
				pathname: '/'
			});
		}
	}	
}

OAuth.propTypes = {
  provider: PropTypes.string.isRequired,
  socket: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	error: state.userSessionReducer.error,
	loggedin: state.userSessionReducer.isLoggedIn,
	isadmin: state.userSessionReducer.isAdmin
})

const mapDispatchToProps = dispatch => ({
	loggedIn: (response) => dispatch(userSessionActions.loggedIn(response))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OAuth))
