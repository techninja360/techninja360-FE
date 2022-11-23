import { ListingProvider } from '../context/listing_context'
import { MerchantDetailsProvider } from '../context/merchantDetails_context'
import { MerchantSignUpProvider } from '../context/merchantSignUp_context'
import { SignUpProvider } from '../context/signUp_context'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <MerchantSignUpProvider>
      <SignUpProvider>
        <MerchantDetailsProvider>
          <ListingProvider>
            <Component {...pageProps} />
          </ListingProvider>
        </MerchantDetailsProvider>
      </SignUpProvider>
    </MerchantSignUpProvider>
  ) 
}

export default MyApp
