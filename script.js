function createNewBubble() {
    const newBubble = document.createElement('div');
    newBubble.classList.add('bubble');
    document.body.appendChild(newBubble);

    // Remove the current bubble when the animation completes
    newBubble.addEventListener('animationend', () => {
        document.body.removeChild(newBubble);
    });
}

// Create the first bubble
createNewBubble();

// Function to create a new bubble when the previous one vanishes
function createNextBubble() {
    createNewBubble();
}

// Start the process by creating the first bubble
createNewBubble();

// Listen for the animationend event on the last created bubble and create the next one
document.body.addEventListener('animationend', createNextBubble);
