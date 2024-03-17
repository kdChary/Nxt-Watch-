import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

// TODO: add context

import {
  LoginContainer,
  ResponsiveContainer,
  Form,
  WebsiteLogo,
  InputContainer,
  Input,
  Label,
  LoginBtn,
  ErrorMsg,
} from './StyledLogin'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showError: false,
    errorMsg: '',
    inputType: 'password',
  }

  onShowPassword = event => {
    if (event.target.checked) {
      this.setState({
        inputType: 'text',
      })
    } else {
      this.setState({
        inputType: 'password',
      })
    }
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
      showError: false,
      errorMsg: '',
    })
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
      showError: false,
      errorMsg: '',
    })
  }

  onFormSubmit = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      const {history} = this.props
      const jwtToken = data.jwt_token

      Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
      history.replace('/')
    } else {
      const errorMsg = data.error_msg
      this.setState({showError: true, errorMsg})
    }
  }

  renderUsernameInput = () => {
    const {username} = this.state
    return (
      <InputContainer dark>
        <Label dark htmlFor="username">
          USERNAME
        </Label>
        <Input
          dark
          id="username"
          type="text"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </InputContainer>
    )
  }

  renderPasswordInput = () => {
    const {password, inputType} = this.state
    return (
      <InputContainer dark>
        <Label dark htmlFor="password">
          PASSWORD
        </Label>
        <Input
          dark
          id="password"
          type={inputType}
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </InputContainer>
    )
  }

  renderShowPassword = () => (
    <InputContainer dark checkbox>
      <Input
        dark
        id="showPassword"
        type="checkbox"
        onChange={this.onShowPassword}
      />
      <Label dark checkbox htmlFor="showPassword">
        Show Password
      </Label>
    </InputContainer>
  )

  renderLoginForm = () => {
    const {showError, errorMsg} = this.state

    return (
      <>
        <WebsiteLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
        />

        <Form onSubmit={this.onFormSubmit} id="loginForm">
          {this.renderUsernameInput()}
          {this.renderPasswordInput()}
          {this.renderShowPassword()}
          <LoginBtn type="submit"> Login </LoginBtn>
          {showError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
        </Form>
      </>
    )
  }

  render() {
    const accessToken = Cookies.get('jwt_token')

    if (accessToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginContainer dark>
        <ResponsiveContainer dark>{this.renderLoginForm()}</ResponsiveContainer>
      </LoginContainer>
    )
  }
}

export default LoginForm
