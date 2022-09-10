import React from 'react'

const ProfilePage = (props) => {
  return (
    <div><h1>{props.user.firstName}</h1></div>
  )
}

export default ProfilePage