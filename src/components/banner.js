import React from 'react'

function Banner() {
    const data = [1, 2, 3, 4, 5, 6, 7, 9] 

  return (
    <div className='banner'>
        <div className='keyboard'>
            {data.map((data1) => 
                <div className="keys">
                    {data1}
                </div>
            )}
        </div>
    </div>
  )
}

export default Banner