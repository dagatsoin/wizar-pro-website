import { Button, Paper, Text, View } from '@sproutch/ui'
import { navigate } from 'gatsby'
import React from 'react'

import { Layout, Markdown, TextInput } from '~/components'
import { ThemeContext } from '~/ThemeContext'
import createStyle from './_askDemo.style'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

type State = {
  sent: boolean
  email: string
  name: string
}

class AskDemoForm extends React.Component<{}, State> {
  public state = {
    sent: false,
    name: '',
    email: '',
  }

  public render() {
    return (
      <ThemeContext.Consumer>
        {theme => {
          const style = createStyle(theme)
          return (
            <Layout>
              <View style={style.root}>
                <Paper elevation={3} style={style.paper}>
                  {!this.state.sent ? (
                    <>
                      {/* Form attributes data-netlify data-netlify-honeypot and all the hidden fields are required
                    for Netlify build to register this form. Otherwize, the form will be send but will be blank. */}
                      <form
                        name="order"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        style={{
                          position: 'relative',
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        <input type="hidden" name="form-name" value="order" />
                        <input type="hidden" name="name" value="name" />
                        <input type="hidden" name="email" value="email" />
                        <Markdown input={`Laissez nous vos coordonnées et nous vous recontacterons très rapidement.`}/>

                        <TextInput
                          style={style.input}
                          placeholder="Votre nom/prénom"
                          onChangeText={name => this.setState({ name })}
                          //error={this.state.nameError}
                        />
                        <TextInput
                          style={style.input}
                          placeholder="Votre email"
                          onChangeText={email => this.setState({ email })}
                          //error={this.state.emailError}
                        />
                      </form>
                      <Button
                        style={style.submit}
                        label="Envoyer"
                        onPress={this.handleSubmit}
                      />
                    </>
                  ) : (
                    <Text>Merci et à très vite !</Text>
                  )}
                </Paper>
              </View>
            </Layout>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  private handleSubmit = () => {
    const { email, name } = this.state
    const body = encode({ 'form-name': 'order', email, name })
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })
      .then(() => {
        this.setState({ sent: true }, () => {
          setTimeout(() => navigate('/'), 4000)
        })
      })
      .catch(error => alert(error))
  }
}

export default AskDemoForm
