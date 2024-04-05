import './App.css';
import Book from "./Components/Book";
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();
function App() {
  return (
      <>
          <div className="App">
              <Book/>
          </div>
      </>
  );
}

export default App;
