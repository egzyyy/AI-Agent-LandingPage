import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// NeuralForge — AI Agent Platform
import NeuralLayout from './components/neuralforge/NeuralLayout';
import NeuralHome from './pages/neuralforge/Home';
import NeuralAbout from './pages/neuralforge/About';
import NeuralSolutions from './pages/neuralforge/Solutions';
import NeuralFaq from './pages/neuralforge/Faq';
import NeuralContact from './pages/neuralforge/Contact';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to neuralforge */}
        <Route path="/" element={<Navigate to="/neuralforge" replace />} />

        {/* NeuralForge AI Agent Platform */}
        <Route path="/neuralforge" element={<NeuralLayout><NeuralHome /></NeuralLayout>} />
        <Route path="/neuralforge/about" element={<NeuralLayout><NeuralAbout /></NeuralLayout>} />
        <Route path="/neuralforge/solutions" element={<NeuralLayout><NeuralSolutions /></NeuralLayout>} />
        <Route path="/neuralforge/faq" element={<NeuralLayout><NeuralFaq /></NeuralLayout>} />
        <Route path="/neuralforge/contact" element={<NeuralLayout><NeuralContact /></NeuralLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
