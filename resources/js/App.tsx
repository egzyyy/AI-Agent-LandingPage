import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// NeuralForge — AI Agent Platform
import NeuralLayout from './components/neuralforge/NeuralLayout';
import NeuralHome from './pages/neuralforge/Home';
import NeuralAbout from './pages/neuralforge/About';
import NeuralSolutions from './pages/neuralforge/Solutions';
import NeuralFaq from './pages/neuralforge/Faq';
import NeuralContact from './pages/neuralforge/Contact';
import NeuralGenerate from './pages/neuralforge/Generate';
import NeuralImageGenerator from './pages/neuralforge/ImageGenerator';
import NeuralShowcase from './pages/neuralforge/Showcase';
import NeuralDesigns from './pages/neuralforge/Designs';

// TestProject site
import TestProjectLayout from './components/testproject/TestProjectLayout';
import TestProjectHome from './pages/testproject/Home';
import TestProjectAbout from './pages/testproject/About';
import TestProjectContact from './pages/testproject/Contact';

// Bloom Salon business site
import BloomSalonBusinessSite from './pages/bloom-salon/BusinessSite';

// Mira Clinic business site
import MiraClinicBusinessSite from './pages/mira-clinic/BusinessSite';

// Ember Table business site
import EmberTableBusinessSite from './pages/ember-table/BusinessSite';

// Lumino Coffee Co. business site
import LuminoCoffeeCoBusinessSite from './pages/lumino-coffee-co/BusinessSite';

// Serene Clinic standard site
import SereneClinicLayout from './components/serene-clinic/SereneClinicLayout';
import SereneClinicHome from './pages/serene-clinic/Home';
import SereneClinicAbout from './pages/serene-clinic/About';
import SereneClinicServices from './pages/serene-clinic/Services';
import SereneClinicFaq from './pages/serene-clinic/Faq';
import SereneClinicContact from './pages/serene-clinic/Contact';

// Aura Gym standard site
import AuraGymLayout from './components/aura-gym/AuraGymLayout';
import AuraGymHome from './pages/aura-gym/Home';
import AuraGymAbout from './pages/aura-gym/About';
import AuraGymServices from './pages/aura-gym/Services';
import AuraGymFaq from './pages/aura-gym/Faq';
import AuraGymContact from './pages/aura-gym/Contact';

// Nori Restaurant standard site
import NoriRestaurantLayout from './components/nori-restaurant/NoriRestaurantLayout';
import NoriRestaurantHome from './pages/nori-restaurant/Home';
import NoriRestaurantAbout from './pages/nori-restaurant/About';
import NoriRestaurantServices from './pages/nori-restaurant/Services';
import NoriRestaurantFaq from './pages/nori-restaurant/Faq';
import NoriRestaurantContact from './pages/nori-restaurant/Contact';

// Velvet & Co standard site
import VelvetCoLayout from './components/velvet-co/VelvetCoLayout';
import VelvetCoHome from './pages/velvet-co/Home';
import VelvetCoAbout from './pages/velvet-co/About';
import VelvetCoServices from './pages/velvet-co/Services';
import VelvetCoFaq from './pages/velvet-co/Faq';
import VelvetCoContact from './pages/velvet-co/Contact';

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
        <Route path="/neuralforge/image-generator" element={<NeuralImageGenerator />} />
        <Route path="/neuralforge/showcase" element={<NeuralLayout><NeuralShowcase /></NeuralLayout>} />
        <Route path="/neuralforge/designs" element={<NeuralLayout><NeuralDesigns /></NeuralLayout>} />

        {/* TestProject site */}
        <Route path="/testproject" element={<TestProjectLayout><TestProjectHome /></TestProjectLayout>} />
        <Route path="/testproject/about" element={<TestProjectLayout><TestProjectAbout /></TestProjectLayout>} />
        <Route path="/testproject/contact" element={<TestProjectLayout><TestProjectContact /></TestProjectLayout>} />

        {/* Bloom Salon business site */}
        <Route path="/bloom-salon" element={<BloomSalonBusinessSite />} />

        {/* Mira Clinic business site */}
        <Route path="/mira-clinic" element={<MiraClinicBusinessSite />} />

        {/* Ember Table business site */}
        <Route path="/ember-table" element={<EmberTableBusinessSite />} />

        {/* Lumino Coffee Co. business site */}
        <Route path="/lumino-coffee-co" element={<LuminoCoffeeCoBusinessSite />} />

        {/* Serene Clinic standard site */}
        <Route path="/serene-clinic" element={<SereneClinicLayout><SereneClinicHome /></SereneClinicLayout>} />
        <Route path="/serene-clinic/about" element={<SereneClinicLayout><SereneClinicAbout /></SereneClinicLayout>} />
        <Route path="/serene-clinic/services" element={<SereneClinicLayout><SereneClinicServices /></SereneClinicLayout>} />
        <Route path="/serene-clinic/faq" element={<SereneClinicLayout><SereneClinicFaq /></SereneClinicLayout>} />
        <Route path="/serene-clinic/contact" element={<SereneClinicLayout><SereneClinicContact /></SereneClinicLayout>} />

        {/* Aura Gym standard site */}
        <Route path="/aura-gym" element={<AuraGymLayout><AuraGymHome /></AuraGymLayout>} />
        <Route path="/aura-gym/about" element={<AuraGymLayout><AuraGymAbout /></AuraGymLayout>} />
        <Route path="/aura-gym/services" element={<AuraGymLayout><AuraGymServices /></AuraGymLayout>} />
        <Route path="/aura-gym/faq" element={<AuraGymLayout><AuraGymFaq /></AuraGymLayout>} />
        <Route path="/aura-gym/contact" element={<AuraGymLayout><AuraGymContact /></AuraGymLayout>} />

        {/* Nori Restaurant standard site */}
        <Route path="/nori-restaurant" element={<NoriRestaurantLayout><NoriRestaurantHome /></NoriRestaurantLayout>} />
        <Route path="/nori-restaurant/about" element={<NoriRestaurantLayout><NoriRestaurantAbout /></NoriRestaurantLayout>} />
        <Route path="/nori-restaurant/services" element={<NoriRestaurantLayout><NoriRestaurantServices /></NoriRestaurantLayout>} />
        <Route path="/nori-restaurant/faq" element={<NoriRestaurantLayout><NoriRestaurantFaq /></NoriRestaurantLayout>} />
        <Route path="/nori-restaurant/contact" element={<NoriRestaurantLayout><NoriRestaurantContact /></NoriRestaurantLayout>} />

        {/* Velvet & Co standard site */}
        <Route path="/velvet-co" element={<VelvetCoLayout><VelvetCoHome /></VelvetCoLayout>} />
        <Route path="/velvet-co/about" element={<VelvetCoLayout><VelvetCoAbout /></VelvetCoLayout>} />
        <Route path="/velvet-co/services" element={<VelvetCoLayout><VelvetCoServices /></VelvetCoLayout>} />
        <Route path="/velvet-co/faq" element={<VelvetCoLayout><VelvetCoFaq /></VelvetCoLayout>} />
        <Route path="/velvet-co/contact" element={<VelvetCoLayout><VelvetCoContact /></VelvetCoLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
