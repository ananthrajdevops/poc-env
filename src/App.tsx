import './App.css';

function App() {
  return (
    <table className='table-container'>
    <thead>
      <tr>
        <th
         className='table-header'
        >
          Env Variable
        </th>
        <th
         className='table-header'
        >Value
          
        </th>
      </tr>
    </thead>
    <tbody>
      {Object.entries(process.env).map(([key, value]) => (
        <tr key={key}>
          <td
           className='table-data'
          >
            {key}
          </td>
          <td
           className='table-data'
          >
            {value}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  );
}

export default App;
