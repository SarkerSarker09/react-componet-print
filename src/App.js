
import './App.css';

import { useRef } from 'react';
import {useReactToPrint} from 'react-to-print';
import TableComponent from './components/TableComponent';

function App() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });

  return (
    <div className="App">
       
	  <button onClick={handlePrint} className="btn btn-primary">Print to PDF!</button>
        
      <TableComponent ref={componentRef} />

    </div>
  );
}

export default App;
