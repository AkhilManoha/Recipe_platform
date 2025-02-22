import React, { useState } from 'react'

const Profile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'Food enthusiast and home cook',
    avatar: '/ban.jpg'
  })

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src={user.avatar} className="card-img-top" alt="Profile" />
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <p className="card-text">{user.bio}</p>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <h2>Profile Information</h2>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              value={user.name}
              onChange={(e) => setUser({...user, name: e.target.value})}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={user.email}
              disabled
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Bio</label>
            <textarea
              className="form-control"
              rows="5"
              value={user.bio}
              onChange={(e) => setUser({...user, bio: e.target.value})}
            ></textarea>
          </div>
          <button className="btn btn-primary">Update Profile</button>
        </div>
      </div>
    </div>
  )
}

export default Profile
