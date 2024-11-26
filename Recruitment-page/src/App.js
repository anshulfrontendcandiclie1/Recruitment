import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import RecruitmentPage from './components/RecruitmentPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext'; 

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <div className="app-container">
            <div className="sidebar">
              <Navbar /> 
            </div>
            <div className="all-pages">
              <Routes>
                <Route path="/services/recruitment" element={<RecruitmentPage />} />
              </Routes>
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
