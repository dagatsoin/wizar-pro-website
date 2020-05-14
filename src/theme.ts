import { BackgroundImageProps, colors, getTheme, Palette, ProgressBarStyle, Theme as SproutchTheme } from '@sproutch/ui'

const palette: Partial<Palette> = {
  common: {
    black: '#000',
    white: '#fff'
  },
  type: 'dark',
  primary: {
    light: '#ffc233',
    main: '#ffb300',
    dark: '#b27d00',
    contrastText: '#fff'
  },
  secondary: {
    light: '#CE4DBF',
    main: '#b900a4',
    dark: '#AA0092',
    contrastText: '#fff'
  },
  text: {
    primary: 'rgba(60, 51, 44, 1)',
    secondary: 'rgba(60, 51, 44, 0.7)',
    disabled: 'rgba(60, 51, 44, 0.5)',
    hint: 'rgba(60, 51, 44, 0.5)',
  },
  background: {
    statusBar: colors.grey[300],
    appBar: colors.grey[100],
    default: colors.grey[50],
    paper: colors.white
  },
  divider: colors.grey[300],
  modifier: {
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(0, 0, 0, 0.14)',
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)'
  },
  contrastThreshold: 3,
  tonalOffset: 0.2
}
const shape = {
  borderRadius: 4,
}

const spacing = 8

export default getTheme<WizarBusiness, Overrides>({
  palette,
  typography: {
    fontFamily: 'Roboto',
  },
  shape,
  spacing,
  business: {
    layout: {
      appBar: {
        height: 8 * spacing
      }
    },
    background: {
      organicDarkBackground: {
        image: {
          uri: '/common_bg_brown.png',
          resizeMode: 'cover',
          position: ['0', '0']
        }
      },
      organicLightBackgound: {
        image: {
          uri: '/images/background.jpg',
          resizeMode: 'cover',
          position: ['50%', '50%']
        }
      }
    },
    gradient: {
      wizar: {
        from: '#6a00f7',
        to: '#b900a4'
      }
    },
    shadow: {
      primary: '#d46400',
      secondary: '#6a00f7'
    },
    text: {
      contrast: '#fff'
    }
  }
})

export type Theme = SproutchTheme<WizarBusiness, Overrides>

type Overrides = {
  progressBar: Partial<ProgressBarStyle>
}

export type Background = {
  backgroundColor?: string
  image?: BackgroundImageProps
}

type WizarBusiness = {
  layout: {
    appBar: {
      height: number
    }
  }
  background: {
    organicLightBackgound: Background
    organicDarkBackground: Background
  }
  gradient: {
    wizar: {
      from: string
      to: string
    }
  }
  shadow: {
    primary: string
    secondary: string
  },
  text: {
    contrast: string
  }
}