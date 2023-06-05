import { useEffect, useState } from "react";

const useShippingInfo = () => {
  const [shippingInDhaka, setShippingInDhaka] = useState();
  const [shippingOutDhaka, setShippingOutDhaka] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/shippingInDhaka")
      .then((res) => res.json())
      .then((data) => setShippingInDhaka(data));

    fetch("http://localhost:5000/shippingOutDhaka")
      .then((res) => res.json())
      .then((data) => setShippingOutDhaka(data));
  }, []);
  return [
    shippingInDhaka,
    setShippingInDhaka,
    shippingOutDhaka,
    setShippingOutDhaka,
  ];
};
export default useShippingInfo;
