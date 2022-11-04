export const SITE_URL = () => {
   console.log('%cMyProject%cline:2%cwindow.location.hostname', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(96, 143, 159);padding:3px;border-radius:2px', window.location.hostname)
   if (window.location.hostname == 'localhost') {
         return 'http://localhost:3001/'
      } else {
         return 'https://paths.onrender.com/'
         }
      } 
      
      // export const SITE_URL = 'https://paths.onrender.com/'