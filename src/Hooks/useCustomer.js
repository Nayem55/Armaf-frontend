import { useEffect, useState } from "react";

const useCustomer = () => {
  const [customerList, setCustomerList] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/getCustomer")
      .then((res) => res.json())
      .then((data) => setCustomerList(data));
  }, []);

  return [customerList,setCustomerList];
};
export default useCustomer;
