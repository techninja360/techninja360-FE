import { SignUpProvider } from '../context/signUp_context'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <SignUpProvider>
      <Component {...pageProps} />
    </SignUpProvider>
  ) 
}

export default MyApp
