import React from 'react'
import { allProductsInfoData } from '../../allProductsInfoData'
import Cameras from './Cameras'
import HazardSensors from './HazardSensors'
import Intercom from './Intercom'
import AccessControl from './AccessControl'
import Tracker from './Tracker'


const AllProducts = () => {
  return (
    <div>
      <div>
        <h2 className=' uppercase text-center text-4xl'>Products</h2>
      <Cameras products= {allProductsInfoData}/>
      <HazardSensors products={allProductsInfoData}/>
      <AccessControl products= {allProductsInfoData}/>
      <Intercom products={allProductsInfoData}/>
      <Tracker products={allProductsInfoData}/>

    </div>
    </div>
  )
}

export default AllProducts