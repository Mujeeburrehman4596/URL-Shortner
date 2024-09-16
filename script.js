document.getElementById('shortenBtn').addEventListener('click', function() {
    const urlInput = document.getElementById('urlInput').value;
    if (urlInput === "") {
        alert("Please enter a URL");
        return;
    }
    // Here you would typically make an API call to a URL shortening service.
    // For simplicity, let's mock this by appending 'short.ly/' to the entered URL.
    const shortUrl = 'short.ly/' + Math.random().toString(36).substring(2, 7);
    alert("Shortened URL: " + shortUrl);
});
