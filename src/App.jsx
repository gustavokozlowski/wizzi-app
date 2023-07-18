import './App.css'
import { Box } from './components/box'
import { Header } from './components/header'
import { AnimatePresence } from "framer-motion";

function App() {

  return (
    <AnimatePresence>
        <Header />
        <Box />
    </AnimatePresence>
  )
}

export default App
