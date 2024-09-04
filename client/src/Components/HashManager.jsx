import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component work only when Swithc one component to other page (or vice-versa) or whenever the route changes

function HashManager() {
  //Using useLocation hook to get current pathname and hash from the URL
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Find the element that matches the hash and replace
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        // Scroll smoothly to the element
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } 
    else {
      // scroll to the top of the page if not finding any hash
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); //Whenever pathname or hash change then this effect will run 

  return null;
}
export default HashManager;
