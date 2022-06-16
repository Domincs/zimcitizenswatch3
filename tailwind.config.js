 
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      green: '#7FBD42',
      orange: '#F15C27',
      black: '#000000',
      white: '#ffffff',
      transparent: {
        0: 'rgba(0,0,0,0.5)',
        400: 'rgba(0,0,0,0.4)',
      },
      gray: {
        light: '#F5F7FB',
        darker: '#EEEEEE',
        deep: '#1A3950',
        normal: '#1C2B36',
        deeper: '#14222D',
        muted: '#908E9B',
      },
    },

    fontFamily: {
      sans: ['TT Commons', 'Graphik', 'sans-serif'],
      serif: ['IBM Plex Sans', 'Merriweather', 'serif'],
    },
    extend: {
      backgroundImage: {
        hero: 'url(/images/hero.png)',
        entre: 'url(/images/centre-for-entrepreneurship-header.jpeg)',
        entrepreneurship: 'url(/images/labs.jpg)',
        philanthropy: 'url(/images/philLab.png)',
        policy: 'url(/images/policyLab.png)',
        doc: 'url(/images/doc.png)',
        us: 'url(/images/us.png)',
        blog: 'url(/images/blog.png)',
      },
      transitionProperty: {
        height: 'height',
        bg: 'background-image',
        display: 'display',
      },
      height: {
        'screen/90': '92vh',
        'screen/65': '65vh',
        'screen/80': '83vh',
      },
      gridTemplateColumns: {
        menu: '350px auto 200px',
        blogs: 'repeat(auto-fit, minmax(390px, 1fr))',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // color: '#333',
            a: {
              color: theme('colors.green'),
            },
            h2: {
              display: 'block',
            },
            p: {
              '&:nth-child(20)': { display: 'none' },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      ringWidth: ['hover'],
      width: ['group-hover'],
      height: ['group-hover'],
      display: ['group-hover'],
      translate: ['group-hover'],
      grayscale: ['group-hover'],
      brightness: ['group-hover'],
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
