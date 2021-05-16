import React, { Component } from 'react'
class ProfileList extends Component {
render() {
      console.log('Props', this.props)
      return (
          
    <ol className='profile-list'>
        <p> HI ALL </p>
        { this.props.profiles.map((profile=>{
             const user =this.props.users[profile.userID].name ;
            const movie =this.props.movies[profile.favoriteMovieID].name 
            return(<li key={profile.id} className="profile-list-item">
            <div>
                   <p>`${user} favorite movie is ${movie}`</p>
            </div>
            </li>
            )
        }))} 
      </ol>)
}
}
export default ProfileList