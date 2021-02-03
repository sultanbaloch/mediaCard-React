import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Facebook(profile) {

  profile = {
    date: new Date().toLocaleTimeString(),
    userName: "Sultan",
    profilePic: "https://wander-lush.org/wp-content/uploads/2020/01/MargalaHillsPakistanNaqshCanvaPro.jpg",
    title: "Islamabad might be a glitzy ‘new’ city, but did you know it also has a vast array of hills perfect for climbing? The Margala Hills are spread out over over 12,000 hectares and contain multiple hiking and running trails.",
    imageUrl: "https://wander-lush.org/wp-content/uploads/2020/01/MargalaHillsPakistanNaqshCanvaPro.jpg",
    body: "Wander Lush"
  }

  return <div className='main'>
    <div className="mediacard">
      <div className="userData">
        <div className="userImage">
          <img className="userProfile"></img>
        </div>
        <div className="NameData">
          <span className="userName">{profile.userName}</span>
          <span className="date">{profile.date}</span>
        </div>
      </div>
      <h3>{profile.title}</h3>
      <p>{profile.body}</p>
      <p><img className='image' src={profile.imageUrl}></img></p>
    </div>
  </div>
}

ReactDOM.render(<Facebook />, document.querySelector("#root"))