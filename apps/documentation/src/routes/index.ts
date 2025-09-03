// Route configuration for the Documentation module
export interface DocumentationRouteConfig {
  path: string;
  component: React.ComponentType;
  label: string;
  description?: string;
}

import Calculators from '../pages/Calculators';
// Import the generated pages
import Campaigns from '../pages/Campaigns';
import Disclosures from '../pages/Disclosures';
import Exchange from '../pages/Exchange';
import Forms from '../pages/Forms';
import Pricing from '../pages/Pricing';

// Simplified flat route structure for Documentation (no categories)
export const DOCUMENTATION_ROUTES: DocumentationRouteConfig[] = [
  {
    path: 'campaigns',
    component: Campaigns,
    label: 'Campanha do Ciclo',
    description: 'Documentação sobre campanhas de ciclo'
  },
  {
    path: 'disclosures',
    component: Disclosures,
    label: 'Divulgações',
    description: 'Documentos de divulgação e comunicados'
  },
  {
    path: 'forms',
    component: Forms,
    label: 'Impressos',
    description: 'Impressos e documentos para preenchimento'
  },
  {
    path: 'pricing',
    component: Pricing,
    label: 'Preçários',
    description: 'Tabelas de preços e tarifas'
  },
  {
    path: 'calculators',
    component: Calculators,
    label: 'Simuladores',
    description: 'Ferramentas de simulação e cálculo'
  },
  {
    path: 'exchange',
    component: Exchange,
    label: 'Câmbio',
    description: 'Ferramentas de simulação e cálculo'
  }
];

// Helper function to get routes for outlet (compatible with records pattern)
export const getDocumentationForOutlet = (): DocumentationRouteConfig[] => {
  return DOCUMENTATION_ROUTES.map((route) => ({
    path: route.path,
    component: route.component,
    label: route.label,
    description: route.description
  }));
};
