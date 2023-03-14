import { useEffect, useState } from "react";

function Ha() {
    const [data, setData] = useState([]);

    useEffect(() => {
        try{
          const fetchData = async () => {
            const response = await fetch("https://api.jsonbin.io/v3/b/640ee172c0e7653a0587007a");
            const data = await response.json();
            setData(data.record);
          };
          fetchData();
        } catch (err){
        console.log(err);
      }
      }, []);
  return (
    <div>{data.map((item) => (
        <div>{item.name}</div>
    ))}</div>
  )
}

export default Ha;