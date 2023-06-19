export const Modal = ({ shiny }) => {
	return (
		<div
			className='modal fade'
			id='pokemonModal'
			tabIndex='-1'
			aria-labelledby='pokemonModalLabel'
			aria-hidden='true'
		>
			<div className='modal-dialog'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h1 className='modal-title fs-5' id='pokemonModalLabel'>
							Shiny
						</h1>
						<button
							type='button'
							className='btn-close'
							data-bs-dismiss='modal'
							aria-label='Close'
						></button>
					</div>
					<div className='modal-body'>
						<div className='d-flex justify-content-center gap-3'>
							<img src={shiny?.front_shiny} />
							<img src={shiny?.back_shiny} />
							<img src={shiny?.front_shiny_female} />
							<img src={shiny?.back_shiny_female} />
						</div>
					</div>
					<div className='modal-footer'>
						<button
							type='button'
							className='btn btn-secondary'
							data-bs-dismiss='modal'
						>
							Close
						</button>
						<button type='button' className='btn btn-primary'>
							Save changes
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
