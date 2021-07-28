import React, { useState, useEffect } from 'react'
import firebase from './firebase';
import Post from './Post';
import css from './App.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Modal from 'react-modal';
import { color, width } from '@material-ui/system';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function App() {
  const [posts, setPosts] = useState([]);
  const [email, setEmail] = useState("rer");
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }



  useEffect(() => {
    firebase.firestore().collection("posts").onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data()))
    })
  }, []);
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal_main_div">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" className="modal_login_image"></img>
          <form noValidate autoComplete="off" className="modal_form">
            <input className="modal_email_box"
              type="email"
              placeholder="Email Address" />
            <input
              type="password" className="modal_password_box"
              placeholder="Password" />

            <div style={{
              backgroundColor: "#0095F6",
              marginTop:"20px",
              width:"100%",
              paddingLeft:"20px",
              borderRadius:"5px",
              height: "40px", display: "flex", justifyContent: "center", alignItems:"center"
            }}>
              <label style={{background:"transparent", color:"white"}}>Login</label>
            </div>
          </form>
        </div>

      </Modal>

      <header className="navBar">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
          className="instagram_image"></img>
          <div style={{cursor:"pointer", marginRight: "20px"}} onClick={() => setIsOpen(true)}>
          <p style={{fontFamily:"Cabin, sans-serif"}}>Log In</p>
          </div>
         
      </header>
      {
        posts.map(post => (
          <Post username={post.username} captions={post.captions}
            imageUrl={post.imageUrl} />
        )
        )
      }

    </div>
  );
}


export default App;
