import React from 'react'

const Popup = ({selectedItem}) => {
  return (
    <div>
        <div>
        <figure className="relative w-full h-48 overflow-hidden">
            <img
            src={selectedItem.Pic}
            alt=""
            className="w-full h-full object-fill object-center"
            />
        </figure>
        </div>
        <h2 className="text-2xl font-bold mb-4">{selectedItem.title}</h2>
        <p>{selectedItem.description}</p>
    </div>
  )
}

export default Popup