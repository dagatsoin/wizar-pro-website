import { Button, Paper, Text, View } from '@sproutch/ui'
import { navigate } from 'gatsby'
import React from 'react'

import { Layout, TextInput, Markdown } from '~/components'
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
                        name="contact"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        style={{
                          position: 'relative',
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        <input type="hidden" name="form-name" value="contact" />
                        <input type="hidden" name="name" value="name" />
                        <input type="hidden" name="email" value="email" />
                        <Markdown
                          input={`
Wizar souhaite se déployer dans de nouveaux territoires et recherche des **partenaires pour sponsoriser son développement.**

Nous souhaitons proposer à nos partenaire notre capacité à toucher une cible difficile (ici les excursionnistes familles avec adolescents) et à les faire consommer dans les territoires en demande.

A partir d'un certain seuil de financement de quêtes sur les territoires secondaires, Wizar **anime gratuitement** vos portes d'entrées touristiques afin de répartir les flux sur tout le territoire.

Pour en savoir plus, remplissez ce formulaire et nous vous enverrons notre dossier de partenariat.`}
                        />

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
