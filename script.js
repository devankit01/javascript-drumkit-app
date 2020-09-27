const data = {
    'A': { name: 'Clap', sound: 'sounds/clap.wav' },
    'S': { name: 'Hihat', sound: 'sounds/hihat.wav' },
    'D': { name: 'Kick', sound: 'sounds/kick.wav' },
    'F': { name: 'hat', sound: 'sounds/openhat.wav' },
    'G': { name: 'Boom', sound: 'sounds/boom.wav' },
    'H': { name: 'Ride', sound: 'sounds/ride.wav' },
    'J': { name: 'Snare', sound: 'sounds/snare.wav' },
    'K': { name: 'Tom', sound: 'sounds/tom.wav' },
    'L': { name: 'Tink', sound: 'sounds/tink.wav' }
};


const drumContainer = document.querySelector('.drum__container');
console.log(drumContainer)


const makeElement = () => {
    for(let i in data){


    let elem = document.createElement('div');
    elem.classList.add('drum');
    let h2 = document.createElement('h2');
    h2.textContent = i;
    let span = document.createElement('span');
    span.textContent = data[i].name;

    elem.appendChild(h2);
    elem.appendChild(span);
    drumContainer.appendChild(elem);
    // console.log('👉',data[i].el,elem)

    data[i].el = elem;
    // console.log('👉',data[i].el,elem)

    elem.addEventListener('click', function(event) {
        let i = event.currentTarget.querySelector('h2').textContent;
        playDrum(i);
        // console.log(i)
    });

    }
    const playDrum = (i) => {
        console.log(i);
        let audio = new Audio();
			audio.src = data[i].sound;
            audio.play();
            
            // Add Animation
            data[i].el.style.WebkitAnimation = 'drum-animation 0.3s';
            data[i].el.style.animation = 'drum-animation 0.3s';
            
			data[i].el.addEventListener("animationend", removeAnimation);

			

    }

    const removeAnimation = (i) =>{
        i.currentTarget.style.animation = 'none';

    }
    const handleKeyEvents = (i) =>{
        playDrum(i.key.toUpperCase());

    }


    // Handle on key press on window
    window.addEventListener('keydown', handleKeyEvents);
}

makeElement();