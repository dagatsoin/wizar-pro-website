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
    primary: 'rgba(159, 155, 143, 1)',
    secondary: 'rgba(159, 155, 143, 0.7)',
    disabled: 'rgba(159, 155, 143, 0.5)',
    hint: 'rgba(159, 155, 143, 0.5)'
  },
  background: {
    statusBar: colors.black,
    appBar: '#211f1e',
    default: '#38312A',
    paper: '#4a433a'
  },
  divider: 'rgba(255, 255, 255, 0.12)',
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
    fontFamily: 'LibreBaskerville-Regular',
  },
  shape,
  spacing,
  business: {
    layout: {
      appBar: {
        height: 57
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
  }
}