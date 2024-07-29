import './App.css';
import Book from "./Pages/Book";
import { pdfjs } from 'react-pdf';
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import styles from "./Pages/Home/Home.module.css";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();
function App() {
  return (
      <>
          <div className={`App ${styles.home__main} bg-[#19191B]`} >
              {/*<Book />*/}
              {/*<Login/>*/}
              {/*{<Home/>}*/}
            <PrivacyPolicy/>
          </div>
      </>
  );
}

export default App;
