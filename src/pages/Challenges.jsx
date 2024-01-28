import Header from '../components/Header.jsx';
import Challenges from '../components/Challenges.jsx';
import ChallengesContextProvider from '../store/challenges-context.jsx';
import { Link } from 'react-router-dom';
export default function ChallengesPage() {
  return (
    <ChallengesContextProvider>
      <Link className='left-arrow' to='/'><span>&larr;</span></Link>
      <Header />
      <main>
        <Challenges />
      </main>
    </ChallengesContextProvider>
  );
}
