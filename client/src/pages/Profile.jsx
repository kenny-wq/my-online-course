import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext'

const Profile = () => {
    const { currentUser } = useContext(UserContext);

  return (
      <div className='p-3'>
          <h3 className='mb-3'>以下是您的個人檔案</h3>
          <p>姓名: {currentUser.user.name}</p>
          <p>email: {currentUser.user.email}</p>
          <p>身分: {currentUser.user.role}</p>
          <p>id: {currentUser.user._id}</p>
      </div>
  )
}

export default Profile