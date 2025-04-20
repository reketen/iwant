document.addEventListener('DOMContentLoaded', () => {
    // DOM elements
    const iButton = document.getElementById('i-button');
    const wantButton = document.getElementById('want-button');
    const items = document.querySelectorAll('.item');
    
    // Current sentence tracking
    let currentSentence = [];
    
    // Audio map - maps words to their audio files
    const audioMap = {
        'Я': 'audio/ya.mp3',
        'ХОЧУ': 'audio/hochu.mp3',
        'БАНАН': 'audio/banan.mp3',
        'ЯБЛУКО': 'audio/yabluko.mp3',
        'ВАРЕННЯ': 'audio/varennya.mp3',
        'ЦУКЕРКУ': 'audio/tsukerku.mp3',
        'ПЛАНШЕТ': 'audio/planshet.mp3',
        'ЇСТИ': 'audio/yisty.mp3',
        'ПИТИ': 'audio/pyty.mp3',
        'ГУЛЯТИ': 'audio/gulyaty.mp3',
        'ПІСЯТИ': 'audio/pisyaty.mp3',
        'КАКАТИ': 'audio/kakaty.mp3'
    };
    
    // Check if audio files exist
    function checkAudioFiles() {
        const testAudio = new Audio(audioMap['Я']);
        
        testAudio.addEventListener('error', function() {
            // Show error message if audio files might be missing
            const errorMsg = `
                <div class="audio-error">
                    <h2>Аудіо файли відсутні!</h2>
                    <p>Не вдалося знайти аудіо файли. Будь ласка:</p>
                    <ol>
                        <li>Створіть папку "audio" в корені проекту</li>
                        <li>Додайте всі аудіо файли згідно з README-AUDIO.md</li>
                        <li>Перезавантажте сторінку</li>
                    </ol>
                    <p>Детальніше у файлі README-AUDIO.md</p>
                </div>
            `;
            
            // Add error message to page
            const container = document.createElement('div');
            container.className = 'error-container';
            container.innerHTML = errorMsg;
            document.body.appendChild(container);
        }, { once: true });
        
        // Start loading to trigger error if file doesn't exist
        testAudio.load();
    }
    
    // Function to play audio
    function playAudio(word) {
        const audioPath = audioMap[word];
        
        // Check if audio file exists for this word
        if (!audioPath) {
            console.error(`No audio file found for word: ${word}`);
            return;
        }
        
        // Create and play audio element
        const audio = new Audio(audioPath);
        
        // Add error handling
        audio.onerror = function() {
            console.error(`Error playing audio file: ${audioPath}`);
        };
        
        // Play the audio
        audio.play().catch(error => {
            console.error('Error playing audio:', error);
        });
    }
    
    // Reset function (called when "Я" is tapped)
    function resetSentence() {
        currentSentence = ["Я"];
        playAudio("Я");
        
        // Visual feedback
        addButtonPressAnimation(iButton);
    }
    
    // Add "ХОЧУ" to the sentence
    function addWant() {
        // Only add "ХОЧУ" if "Я" was already tapped
        if (currentSentence.length === 1 && currentSentence[0] === "Я") {
            currentSentence.push("ХОЧУ");
            playAudio("ХОЧУ");
            
            // Visual feedback
            addButtonPressAnimation(wantButton);
        }
    }
    
    // Add item to the sentence
    function addItem(word) {
        // Only add item if we have "Я ХОЧУ" already
        if (currentSentence.length === 2 && currentSentence[0] === "Я" && currentSentence[1] === "ХОЧУ") {
            currentSentence.push(word);
            playAudio(word);
        }
    }
    
    // Visual feedback animation
    function addButtonPressAnimation(element) {
        element.classList.add('button-press');
        setTimeout(() => {
            element.classList.remove('button-press');
        }, 200);
    }
    
    // Event listeners
    iButton.addEventListener('click', resetSentence);
    
    wantButton.addEventListener('click', addWant);
    
    items.forEach(item => {
        item.addEventListener('click', function() {
            const word = this.getAttribute('data-word');
            addItem(word);
            addButtonPressAnimation(this);
        });
    });
    
    // Check for audio files on startup
    checkAudioFiles();
    
    // Initial reset to set up the sentence
    resetSentence();
}); 