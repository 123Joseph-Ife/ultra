import React from 'react'

const Companies = ({ data }) => {
  return (
    <div className="companies bt-flex">
        {data.map(company => (
            <img src={company.path} alt={company.alt} key={company.id} />
        ))}
        {console.log(typeof(data))}
    </div>
  )
}

export default Companies