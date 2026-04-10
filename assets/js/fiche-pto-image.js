// This script dynamically fetches and displays the PTO image for the news detail (fiche) page if it exists in the database.
(function() {
  // Try to extract a news identifier from the URL or page title
  // Example: actu-mois-urbain.html => 'mois-urbain'
  var path = window.location.pathname;
  var file = path.substring(path.lastIndexOf('/') + 1);
  var newsSlug = file.replace(/^actu-/, '').replace(/\.html$/, '');

  // If the page is not a news fiche, do nothing
  if (!newsSlug) return;

  // Create prefix depending on current location (pages/ or pages/ar/)
  var currentPath = window.location.pathname;
  var prefix = '';
  if (currentPath.indexOf('/pages/ar/') !== -1) {
    prefix = '../../';
  } else if (currentPath.indexOf('/pages/') !== -1) {
    prefix = '../';
  }

  // API endpoint to fetch news details (should return image_path if present)
  var apiUrl = prefix + 'api/news-detail.php?slug=' + encodeURIComponent(newsSlug) + '&file=' + encodeURIComponent(file);

  fetch(apiUrl)
    .then(function(response) { return response.json(); })
    .then(function(data) {
      if (data && data.ok && data.image_path) {
        // Create the image element
        var img = document.createElement('img');
        
        var cleanPath = data.image_path.replace(/^\/+/, '');
        img.src = prefix + cleanPath;
        
        img.alt = 'Image PTO';
        img.className = 'fiche-pto-image';
        // Insert at the top of the main content
        var main = document.querySelector('main.page-main .container');
        if (main) {
          main.insertBefore(img, main.firstChild);
        }
      }
    })
    .catch(function(err) {
      // Fail silently
    });
})();
