import { useEffect, useState } from "react";

const useOrder = () => {
  const [orderList, setOrderList] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/getOrder")
      .then((res) => res.json())
      .then((data) => setOrderList(data));
  }, []);

  return [orderList, setOrderList];
};
export default useOrder;
