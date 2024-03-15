import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  Container,
  FormContainer,
  LoginForm,
  Label,
  Input,
  AppLogo,
  LoginBtn,
  TextContent,
  Checkbox,
  CheckboxCard,
} from '../../styledComponents/LoginStyled'
import ThemeContext from '../../context/ThemeContext'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showError: false,
    errMsg: '',
    showPassword: false,
  }

  toggleShowPassword = event => {
    if (event.target.checked) {
      this.setState({showPassword: true})
    } else {
      this.setState({showPassword: false})
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitCredentials = async event => {
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
      const jwtToken = data.jwt_token
      const {history} = this.props

      Cookies.set('jwt_token', jwtToken, {
        expires: 30,
        path: '/',
      })
      history.replace('/')
    } else {
      this.setState({showError: true, errMsg: data.error_msg})
    }
  }

  render() {
    const token = Cookies.get('jwt_token')

    if (token !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          const {
            username,
            password,
            showError,
            errMsg,
            showPassword,
          } = this.state
          const imageUrl = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const passType = showPassword ? 'text' : 'password'

          return (
            <Container dark={isDark}>
              <FormContainer dark={isDark}>
                <AppLogo src={imageUrl} alt="website logo" />
                <LoginForm
                  dark={isDark}
                  main
                  onSubmit={this.onSubmitCredentials}
                >
                  <LoginForm as="div" dark={isDark}>
                    <Label dark={isDark} htmlFor="username">
                      USERNAME
                    </Label>
                    <Input
                      type="text"
                      dark={isDark}
                      id="username"
                      value={username}
                      onChange={this.onChangeUsername}
                      placeholder="Username"
                    />
                  </LoginForm>
                  <LoginForm dark={isDark} as="div">
                    <Label dark={isDark} htmlFor="password">
                      PASSWORD
                    </Label>
                    <Input
                      type={passType}
                      dark={isDark}
                      id="password"
                      value={password}
                      onChange={this.onChangePassword}
                      placeholder="Password"
                    />
                  </LoginForm>
                  <CheckboxCard>
                    <Checkbox
                      type="checkbox"
                      dark={isDark}
                      id="box"
                      value={password}
                      onChange={this.toggleShowPassword}
                      placeholder="Password"
                    />
                    <Label dark={isDark} htmlFor="box">
                      Show Password
                    </Label>
                  </CheckboxCard>
                  <LoginBtn type="submit">Login</LoginBtn>
                  {showError && <TextContent error>*{errMsg}</TextContent>}
                </LoginForm>
              </FormContainer>
            </Container>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
