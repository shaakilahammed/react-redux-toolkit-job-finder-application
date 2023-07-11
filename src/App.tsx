import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/UI/Layout';
import AddJobs from './pages/AddJobs';
import EditJobs from './pages/EditJobs';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home/:type" element={<Home />} />
          <Route path="/home/:type" element={<Home />} />
          <Route path="/home/:type" element={<Home />} />
          <Route path="/jobs/add" element={<AddJobs />} />
          <Route path="/jobs/edit/:jobId" element={<EditJobs />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
