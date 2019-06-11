import React from 'react'

import { Button, View } from '@sproutch/ui'
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
        <View>
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
            <Button>
              Envoyer
            </Button>
          </form>
        </View>
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
