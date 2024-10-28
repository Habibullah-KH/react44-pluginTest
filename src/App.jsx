import { LineChart } from 'recharts'
import Chart from './assets/component/Chart/Chart'
import './App.css'
import NavBar from './assets/component/NavBar/NavBar'
import PriceOptions from './assets/component/price options/PriceOptions'

function App() {
  return (
    <>
<NavBar/>
<PriceOptions/>
<Chart></Chart>
    </>
  )
}

export default App
