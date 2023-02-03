import React from 'react'

function Banner() {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9] 

  return (
    <div className='banner'>
        <div className='keyboard'>
            {data.map((data1) => 
                <div key={data1} className="keys">
                    {data1}
                </div>
            )}
        </div>
    </div>
  )
}

export default Banner