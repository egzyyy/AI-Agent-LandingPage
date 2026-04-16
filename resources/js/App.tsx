import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// NeuralForge — AI Agent Platform
import NeuralLayout from './components/neuralforge/NeuralLayout';
import NeuralHome from './pages/neuralforge/Home';
import NeuralAbout from './pages/neuralforge/About';
import NeuralSolutions from './pages/neuralforge/Solutions';
import NeuralFaq from './pages/neuralforge/Faq';
import NeuralContact from './pages/neuralforge/Contact';
import NeuralGenerate from './pages/neuralforge/Generate';

// TestProject site
import TestProjectLayout from './components/testproject/TestProjectLayout';
import TestProjectHome from './pages/testproject/Home';
import TestProjectAbout from './pages/testproject/About';
import TestProjectContact from './pages/testproject/Contact';

// Bloom Salon business site
import BloomSalonBusinessSite from './pages/bloom-salon/BusinessSite';

// Mira Clinic business site
import MiraClinicBusinessSite from './pages/mira-clinic/BusinessSite';

// Aura Gym standard site
import AuraGymLayout from './components/aura-gym/AuraGymLayout';
import AuraGymHome from './pages/aura-gym/Home';
import AuraGymAbout from './pages/aura-gym/About';
import AuraGymServices from './pages/aura-gym/Services';
import AuraGymFaq from './pages/aura-gym/Faq';
import AuraGymContact from './pages/aura-gym/Contact';

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
        <Route path="/neuralforge/generate" element={<NeuralLayout><NeuralGenerate /></NeuralLayout>} />

        {/* TestProject site */}
        <Route path="/testproject" element={<TestProjectLayout><TestProjectHome /></TestProjectLayout>} />
        <Route path="/testproject/about" element={<TestProjectLayout><TestProjectAbout /></TestProjectLayout>} />
        <Route path="/testproject/contact" element={<TestProjectLayout><TestProjectContact /></TestProjectLayout>} />

        {/* Bloom Salon business site */}
        <Route path="/bloom-salon" element={<BloomSalonBusinessSite />} />

        {/* Mira Clinic business site */}
        <Route path="/mira-clinic" element={<MiraClinicBusinessSite />} />

        {/* Aura Gym standard site */}
        <Route path="/aura-gym" element={<AuraGymLayout><AuraGymHome /></AuraGymLayout>} />
        <Route path="/aura-gym/about" element={<AuraGymLayout><AuraGymAbout /></AuraGymLayout>} />
        <Route path="/aura-gym/services" element={<AuraGymLayout><AuraGymServices /></AuraGymLayout>} />
        <Route path="/aura-gym/faq" element={<AuraGymLayout><AuraGymFaq /></AuraGymLayout>} />
        <Route path="/aura-gym/contact" element={<AuraGymLayout><AuraGymContact /></AuraGymLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
