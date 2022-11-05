import { MerchantSignUpProvider } from '../context/merchantSignUp_context'
import { SignUpProvider } from '../context/signUp_context'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <MerchantSignUpProvider>
      <SignUpProvider>
        <Component {...pageProps} />
      </SignUpProvider>
    </MerchantSignUpProvider>
  ) 
}

export default MyApp
