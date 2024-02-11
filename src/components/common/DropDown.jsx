import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function DropDown() {
  return (
    <div className='w-full shadow-1 h-64 rounded-lg p-6 bg-white'>
        <div className="w-full ">
                <span className="fixed py-3 pl-4">
                  <FontAwesomeIcon icon={faSearch} className="text-table_low" />
                </span>
                <input
                  className="w-full border border-input_border rounded-xl py-2.5 pl-11  "
                  type="text"
                  placeholder="Search"
                />
              </div>
        <p className='border-b border-gray py-3 text-table_heading text-base'>HSC Powerplay 2024</p>
        <p className='border-b border-gray py-3'>HSC Powerplay 2024</p>
        <p className='border-b border-gray py-3'>HSC Powerplay 2024</p>
    </div>
  )
}

export default DropDown