import React from 'react'
import { Link } from 'react-router-dom'

const Thankyou = () => {
  return (
    <>

<div class="hero">
				<div class="container">
					<div class="row justify-content-between">
						<div class="col-lg-5">
							<div class="intro-excerpt">
								<h1 className='text-3xl'>Cart</h1>
							</div>
						</div>
						<div class="col-lg-7">
							
						</div>
					</div>
				</div>
			</div>
		{/* <!-- End Hero Section --> */}

		

		<div class="untree_co-section" >
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center pt-5">
          <span class="display-3 thankyou-icon text-primary" >
          
<i class="fa-solid fa-cart-plus"></i>
          </span>
          <h2 class="display-3 text-black">Thank you!</h2>
          <p class="lead mb-5">You order was successfuly completed.</p>
          <p>
            <Link to="/Shop" class="btn btn-sm btn-outline-black">Back to shop</Link>
            
          </p>
        </div>
      </div>
    </div>
  </div>

    
    </>
  )
}

export default Thankyou
