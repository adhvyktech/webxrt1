function startDemo(type) {
    switch(type) {
        case 'target':
            window.location.href = 'targettrackingdemo.html';
            break;
        case 'face':
            window.location.href = 'facetrackingdemo.html';
            break;
        case 'hand':
            window.location.href = 'handtrackingdemo.html';
            break;
        default:
            console.error('Unknown demo type');
    }
}

// Add this function to handle the "Create Your Own AR Experience" button
function createARExperience() {
    window.location.href = 'create-ar.html';
}

// You might want to add an event listener for the new button if it's not using the onclick attribute
document.addEventListener('DOMContentLoaded', function() {
    const createARButton = document.querySelector('.demo-button');
    if (createARButton) {
        createARButton.addEventListener('click', createARExperience);
    }
});
