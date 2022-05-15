import React, { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { useScrollTracker } from "react-scroll-tracker"
import logo from "../assets/Group 1.png"

const Navbar = () => {
	const [scrollY, setScrollY] = useState(0)
	const { scrollY: scrollYT } = useScrollTracker()
	useEffect(() => {
		setScrollY(window.scrollY)
	}, [scrollYT])
	console.log(scrollY)
	return (
		<div
			className={`fixed top-0 w-full duration-300 navbar z-50 ${
				scrollY < 160 ? "" : "bg-base-100"
			}`}
		>
			<div
				class={`flex justify-between container mx-auto duration-300 ${
					scrollY < 160 ? "py-8" : "py-1"
				}`}
			>
				<div class="w-full navbar-start lg:w-auto flex justify-between">
					<Link to="/">
						<img src={logo} class="w-[198px]" alt="" />
					</Link>

					<div class="dropdown dropdown-end">
						<label tabindex="0" class="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabindex="0"
							class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
						>
							<NavLink
								className={({ isActive }) =>
									isActive
										? "bg-primary px-8 font-bold py-4 rounded-2xl"
										: "disabled px-8 font-bold py-4 rounded-2xl"
								}
								to="/books"
							>
								Books
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									isActive
										? "bg-primary px-8 font-bold py-4 rounded-2xl"
										: "disabled px-8 font-bold py-4 rounded-2xl"
								}
								to="/courses"
							>
								Courses
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									isActive
										? "bg-primary px-8 font-bold py-4 rounded-2xl"
										: "disabled px-8 font-bold py-4 rounded-2xl"
								}
								to="/others"
							>
								Others
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									isActive
										? "bg-primary px-8 font-bold py-4 rounded-2xl"
										: "disabled px-8 font-bold py-4 rounded-2xl"
								}
								to="/blogs"
							>
								Blogs
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									isActive
										? "bg-primary px-8 font-bold py-4 rounded-2xl"
										: "disabled px-8 font-bold py-4 rounded-2xl"
								}
								to="/sign-in"
							>
								Sign in
							</NavLink>
						</ul>
					</div>
				</div>
				<div class="hidden lg:flex">
					<ul class="p-0 py-4">
						<NavLink
							className={({ isActive }) =>
								isActive
									? "bg-primary px-8 font-bold py-4 rounded-2xl"
									: "disabled px-8 font-bold py-4 rounded-2xl"
							}
							to="/books"
						>
							Books
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "bg-primary px-8 font-bold py-4 rounded-2xl"
									: "disabled px-8 font-bold py-4 rounded-2xl"
							}
							to="/courses"
						>
							Courses
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "bg-primary px-8 font-bold py-4 rounded-2xl"
									: "disabled px-8 font-bold py-4 rounded-2xl"
							}
							to="/others"
						>
							Others
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "bg-primary px-8 font-bold py-4 rounded-2xl"
									: "disabled px-8 font-bold py-4 rounded-2xl"
							}
							to="/blogs"
						>
							Blogs
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "bg-primary px-8 font-bold py-4 rounded-2xl"
									: "disabled px-8 font-bold py-4 rounded-2xl"
							}
							to="/sign-in"
						>
							Sign in
						</NavLink>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Navbar
