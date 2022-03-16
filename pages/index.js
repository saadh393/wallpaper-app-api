import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = "http://weblywork.com/";
  }, []);
  return <code>You are not supposed to be here</code>;
}
