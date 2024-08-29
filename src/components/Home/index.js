import Header from '../Header'
import SideNavigator from '../SideNavigator'
import PremiumBox from '../PremiumBox'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="flex-row">
      <SideNavigator />
      <div className="flex-start">
        <PremiumBox />
        <h1>Home</h1>
      </div>
    </div>
  </>
)

export default Home
