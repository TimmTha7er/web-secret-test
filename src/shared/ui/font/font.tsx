import localFont from '@next/font/local'

const addFont = localFont({
  src: [
    {
      path: '../../../../public/fonts/montserrat/Montserrat-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../../public/fonts/montserrat/Montserrat-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../../public/fonts/montserrat/Montserrat-Bold.woff2',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: '../../../../public/fonts/montserrat/Montserrat-Bold.woff',
      weight: 'bold',
      style: 'normal',
    },
  ],
  adjustFontFallback: 'Arial',
  display: 'swap',
  variable: '--font-inter',
})

const Font = () => {
  return (
    <style
      jsx
      global
    >{`
      html {
        font-family: ${addFont.style.fontFamily};
      }
    `}</style>
  )
}

export { Font }
