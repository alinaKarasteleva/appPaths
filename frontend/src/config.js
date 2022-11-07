export const SITE_URL = () => {

   if (window.location.hostname == 'localhost') {
      return 'http://localhost:3001/'
   } else {
      return 'https://paths.onrender.com/'
   }
}
