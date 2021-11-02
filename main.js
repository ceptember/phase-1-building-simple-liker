// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let hearts = [...document.getElementsByClassName('like-glyph')];
hearts.forEach((heart) => {heart.addEventListener('click', handleLike) } )
 
function handleLike (event){
  //console.log(event.target);
  mimicServerCall()
    .then(() => {
      //console.log('then!');
      if ( event.target.textContent == FULL_HEART ){
        event.target.textContent = EMPTY_HEART;
        event.target.className = "like-glyph";
      }
      else {
        event.target.textContent = FULL_HEART;
        event.target.className = "like-glyph activated-heart";
      }
      
      
    })

    .catch(error => {
      document.querySelector('#modal').className='';
      document.querySelector('#modal').textContent = error;
      setTimeout( () => {document.querySelector('#modal').className='hidden';}, 3000)
    })
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
