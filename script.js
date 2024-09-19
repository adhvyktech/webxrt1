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
