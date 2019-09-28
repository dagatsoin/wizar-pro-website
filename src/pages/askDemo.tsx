import { Button, Paper, Text, View } from '@sproutch/ui'
import { navigate } from 'gatsby'
import React from 'react'

import { Layout, TextInput } from '~/components'
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

  //private formRef: React.RefObject<HTMLFormElement>
  private formRef: HTMLFormElement | null = null
/*
  constructor(props: {}) {
    super(props)
    this.formRef = React.createRef()
  }
*/
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
                      <form
                        ref={(form) => this.formRef = form}
                        style={{

                          position: 'relative',
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        <input type="hidden" name="form-name" value="contact" />
                        <Text>
                          Remplissez simplement ce formulaire et l'on vous
                          recontactera au plus vite.
                        </Text>
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
    const body = encode({ 'form-name': 'contact', email, name })
    console.log(body)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })
      .then(() => {
        this.setState({ sent: true }, () => {
          console.log('sent')
          setTimeout(() => navigate('/'), 4000)
        })
      })
      .catch(error => alert(error))
  }
}

export default AskDemoForm
