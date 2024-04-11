//import { SessionProvider } from 'next-auth/react'; //SessionProvider, getSession
import TemporaryDrawer from '../components/navbar/drawer';

export default function App({ Component, pageProps }) {
  return (
    
      <TemporaryDrawer>
        <Component {...pageProps} />
      </TemporaryDrawer>
  );
}
