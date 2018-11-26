import React from 'react'

import { Button, Grid, TextField } from '@material-ui/core'
import { Layout } from '../../src/components'
import style from './_askDemo.style'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class AskDemoForm extends React.Component {
  public state = {
    email: '',
  }

  public render() {
    return (
      <Layout>
        <Grid container justify="center">
          <form
            noValidate
            onSubmit={this.handleSubmit}
            style={style.root}
            autoComplete="off"
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <TextField
              id="email"
              name="email"
              label="Email"
              type="email"
              style={style.textField}
              value={this.state.email}
              onChange={this.handleChange}
              margin="normal"
            />
            <Button type="submit" color="primary" variant="contained">
              Envoyer
            </Button>
          </form>
        </Grid>
      </Layout>
    )
  }

  private handleChange = event => {
    this.setState({
      email: event.target.value,
    })
  }

  private handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => alert('Merci ! On vous rappelle très vite !'))
      .catch(error => alert(error))

    e.preventDefault()
  }
}

export default AskDemoForm
