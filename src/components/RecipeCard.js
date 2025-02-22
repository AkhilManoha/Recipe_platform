import React from 'react'
import { FaStar } from 'react-icons/fa'

const RecipeCard = ({ title, image, description, author, rating }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <small className="text-muted">By {author}</small>
            <div className="rating">
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar
                  key={i}
                  color={i < rating ? '#ffc107' : '#e4e5e9'}
                  size={18}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="card-footer bg-transparent border-top-0">
          <button className="btn btn-primary w-100">View Recipe</button>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard
