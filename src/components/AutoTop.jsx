import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to top when the route changes
function AutoScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return null;
}

export default AutoScrollTop;