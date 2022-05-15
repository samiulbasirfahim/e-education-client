import { useState } from "react"
import Home from "./pages/home/Home"
import Navbar from "./Shared/Navbar"

const App = () => {
	const [isDarkMode, setIsDarkMode] = useState(
		localStorage.getItem("isDarkMode")
	)

	const handleThemeChange = () => {
		localStorage.setItem("isDarkMode", isDarkMode)
		setIsDarkMode(!isDarkMode)
	}
	return (
		<div
			data-theme={isDarkMode ? "dark" : "mytheme"}
			className="min-h-[200vh]"
		>
			<Navbar />
			<Home />
		</div>
	)
}

export default App
