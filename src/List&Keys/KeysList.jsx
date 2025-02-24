const KeysList = () => {
  const data = ["sachin", "dhoni", "kohli", "uv", "Dravid"];

  const players = [
    {
      name: "sachin",
      runs: 20000,
      loc: "Mumbai",
    },
    {
      name: "Dhoni",
      runs: 10000,
      loc: "Ranchi",
    },
    {
      name: "Kohli",
      runs: 15000,
      loc: "Delhi",
    },
    {
      name: "Dravid",
      runs: 12000,
      loc: "Banglore",
    },
  ];

  const playerObj = {
    name: "sachin",
    runs: 20000,
    loc: "mumbai",
    hun: "100",
    fif: "76",
    catches: 226,
  };
  return (
    <div>
      <h3>Order List</h3>
      <ol>
        {data.map((v, i) => {
          return <li key={i}>{v}</li>;
        })}
      </ol>

      <h3>DropDown</h3>
      <select>
        {data.map((v, i) => {
          return <option key={"opt" + i}>{v}</option>;
        })}
      </select>

      <h3>Table</h3>
      <table border="2px">
        <thead>
          <tr>
            <th>Name</th>
            <th>Runs</th>
            <th>Location</th>
          </tr>
        </thead>

        <tbody>
          {players.map((o, i) => (
            <tr key={i}>
              <td>{o.name}</td>
              <td>{o.runs}</td>
              <td>{o.loc}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Render Object in Table Format</h3>
      <table border="2px">
        <tbody>
          {Object.keys(playerObj).map(
            (
              v,
              i //Object.keys (playerObj) all keys are converted into array
            ) => (
              <tr key={"tr" + i}>
                <td>{v}</td>
                <td>{playerObj[v]}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default KeysList;
