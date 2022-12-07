import { ListingProvider } from '../context/listing_context'
import { MerchantDetailsProvider } from '../context/merchantDetails_context'
import { MerchantProfileProvider } from '../context/merchantProfile_context'
import { SignUpProvider } from '../context/signUp_context'
import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return(
    <MerchantProfileProvider>
      <SignUpProvider>
        <MerchantDetailsProvider>
          <ListingProvider>
            <Component {...pageProps} />
          </ListingProvider>
        </MerchantDetailsProvider>
      </SignUpProvider>
    </MerchantProfileProvider>
  ) 
}

export default MyApp
