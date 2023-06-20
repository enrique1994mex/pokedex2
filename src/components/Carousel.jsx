export const Carousel = ({ sprites }) => {
	return (
		<div id='carouselExample' className='carousel slide'>
			<div className='carousel-inner'>
				<div className='carousel-item active'>
					<img
						src={`${
							sprites?.front_default
								? sprites?.front_default
								: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4='
						}`}
						className='d-block w-100'
						alt='fron_default'
					/>
				</div>
				<div className='carousel-item'>
					<img
						src={`${
							sprites?.back_default
								? sprites?.back_default
								: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4='
						}`}
						className='d-block w-100'
						alt='back_default'
					/>
				</div>
				<div className='carousel-item'>
					<img
						src={`${
							sprites?.front_female
								? sprites?.front_female
								: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4='
						}`}
						className='d-block w-100'
						alt='front_female'
					/>
				</div>
				<div className='carousel-item'>
					<img
						src={`${
							sprites?.back_female
								? sprites?.back_female
								: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4='
						}`}
						className='d-block w-100'
						alt='back_female'
					/>
				</div>
				<div className='carousel-item'>
					<img
						src={`${
							sprites?.front_shiny
								? sprites?.front_shiny
								: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4='
						}`}
						className='d-block w-100'
						alt='front_shiny'
					/>
				</div>
				<div className='carousel-item'>
					<img
						src={`${
							sprites?.back_shiny
								? sprites?.back_shiny
								: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4='
						}`}
						className='d-block w-100'
						alt='back_shiny'
					/>
				</div>
				<div className='carousel-item'>
					<img
						src={`${
							sprites?.front_shiny_female
								? sprites?.front_shiny_female
								: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4='
						}`}
						className='d-block w-100'
						alt='front_shiny_female'
					/>
				</div>
				<div className='carousel-item'>
					<img
						src={`${
							sprites?.back_shiny_female
								? sprites?.back_shiny_female
								: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4='
						}`}
						className='d-block w-100'
						alt='back_shiny_female'
					/>
				</div>
			</div>
			<button
				className='carousel-control-prev'
				type='button'
				data-bs-target='#carouselExample'
				data-bs-slide='prev'
			>
				<span className='carousel-control-prev-icon' aria-hidden='true'></span>
				<span className='visually-hidden'>Previous</span>
			</button>
			<button
				className='carousel-control-next'
				type='button'
				data-bs-target='#carouselExample'
				data-bs-slide='next'
			>
				<span className='carousel-control-next-icon' aria-hidden='true'></span>
				<span className='visually-hidden'>Next</span>
			</button>
		</div>
	)
}
