import React, { useEffect, useState } from "react";

const FreeWeaklyRutin = () => {
  const [rutin, setRutin] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/free-weakly-test-rutin`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setRutin(data));
  }, []);
  return (
    <div>
      <h1 className="text-center my-5 ">Free weakly Model Test Rutine</h1>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 max-w-6xl mx-auto p-4">
        {rutin.map((rutins) => {
          return (
            <div
              key={rutins._id}
              className="text-center p-5 border border-dashed border-green-400 h-40 rounded"
            >
              <h5>{rutins.footer}</h5>
              <h4 className="text-sm">{rutins.title}</h4>
              {rutins.descripetion?.split("...").map((p) => (
                <h4 className="text-sm">{p}</h4>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FreeWeaklyRutin;
