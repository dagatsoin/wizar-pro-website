import React from 'react'

import { Button, Grid, TextField } from '@material-ui/core'
import { Layout } from '../../src/components'
import style from './_askDemo.style'

class AskDemoForm extends React.Component {
  public state = {
    email: '',
  }

  public handleChange = email => event => {
    this.setState({
      [email]: event.target.value,
    })
  }

  public render() {
    return (
      <Layout>
        <Grid container justify="center">
          <form
            style={style.root}
            noValidate
            autoComplete="off"
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <TextField
              id="email"
              label="Email"
              type="email"
              style={style.textField}
              value={this.state.email}
              onChange={this.handleChange('email')}
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
}

export default AskDemoForm
