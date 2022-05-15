import React from "react"
import BannerImage from "../../assets/Frame (1).png"

const Banner = () => {
	return (
		<div>
			<div class="hero min-h-screen pt-28 bg-base-200">
				<div class="hero-content flex-col lg:flex-row-reverse">
					<img
						src={BannerImage}
						class="xl:max-w-2xl lg:max-w-lg max-w-xs"
						alt=""
					/>
					<div>
						<h1 class="text-7xl font-bold">Learn with fun on <span className="text-primary">any schedule</span></h1>
						<p class="py-6 font-black">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius blandit facilisis quam netus.
						</p>
						<button class="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Banner
