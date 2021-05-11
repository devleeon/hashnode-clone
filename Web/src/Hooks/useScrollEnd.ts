import { useEffect, useState } from "react";

const useScrollEnd = (loading: boolean) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (
        document.documentElement.scrollTop +
          document.documentElement.clientHeight >
        document.documentElement.scrollHeight * 0.9
      ) {
        if (!loading) {
          setState(true);
        }
      } else {
        setState(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [loading]);
  return state;
};
export default useScrollEnd;
