//hiphop
//play when play button is clicked
function playMusic() {
	const audio = document.querySelector(`#audioFile`)
	audio.play();
	audio.currentTime = 3  // Position between 0 and duration (in seconds)
  }
  
  //paused when paused button is clicked
  function pauseMusic() {
	const audio = document.querySelector(`#audioFile`)
	audio.pause();
  }

  //restart to 5secs when restart button is clicked
    function restartMusic() {
    const audio = document.querySelector(`#audioFile`)
    audio.currentTime = 3
    }

  //Soul
  //play when play button is clicked
  function playMusic2() {
	const audio = document.querySelector(`#audioFile2`)
	audio.play();
  }
  //paused when paused button is clicked
  function pauseMusic2() {
	const audio = document.querySelector(`#audioFile2`)
	audio.pause();
  }

  
  //restart to 5secs when restart button is clicked
  function restartMusic2() {
    const audio = document.querySelector(`#audioFile2`)
    audio.load() = 0
    }

  //Reggae
  ////play when play button is clicked
  function playMusic3() {
	const audio = document.querySelector(`#audioFile3`)
	audio.play();
	audio.currentTime = 30  // Position between 0 and duration (in seconds)
	
  }
  //paused when paused button is clicked
  function pauseMusic3() {
	const audio = document.querySelector(`#audioFile3`)
	audio.pause();

  }

  //restart to 5secs when restart button is clicked
  function restartMusic3() {
    const audio = document.querySelector(`#audioFile3`)
    audio.load() = 0
    }

