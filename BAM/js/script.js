    function fadeOutLoadingOverlay() {
        var loadingOverlay = document.getElementById('loading-overlay');
        loadingOverlay.style.transition = 'opacity 1s ease-in-out'; // Fade out over 1 second
        loadingOverlay.style.opacity = '0';
        
        // Hide the loading overlay after the fade-out animation completes
        setTimeout(function() {
            loadingOverlay.style.display = 'none';
        }, 1000); // Wait for the fade-out animation to complete (1000 milliseconds)
setTimeout(function() {
            loadingOverlay.style.display = 'none';
            // Enable pointer events and scrolling in the body after loading finishes
            document.body.style.pointerEvents = 'auto';
            document.body.style.overflow = 'auto';
        }, 1000); // Wait for the fade-out animation to complete (1000 milliseconds)
    }

	document.body.style.pointerEvents = 'none';
	document.body.style.overflow = 'hidden';

    // Remove the loading overlay when the page has finished loading
    window.addEventListener('load', function() {
        // Add a delay before starting the fade-out animation
        setTimeout(fadeOutLoadingOverlay, 5000); // Delay for 500 milliseconds
    });