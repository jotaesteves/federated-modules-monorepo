// Route configuration for the Records module
export interface RecordsRouteConfig {
  path: string;
  component: React.ComponentType;
  label: string;
}

export interface CategoryRoutes {
  category: string;
  basePath: string;
  routes: RecordsRouteConfig[];
}

// Cards section routes
import * as CardsPages from '../pages/Cards';

// Digital Channels section routes
import * as BimLinePages from '../pages/DigitalChannels/BimLine';
import * as InternetBankingPages from '../pages/DigitalChannels/InternetBanking';
import * as MobileBankingPages from '../pages/DigitalChannels/MobileBanking';

// Current Accounts section routes
import * as CurrentAccountsPages from '../pages/CurrentAccounts';

// Loans section routes
import * as LoansPages from '../pages/Loans';

// Complaints section routes
import * as ComplaintsPages from '../pages/Complaints';

// Other section routes
import * as OtherPages from '../pages/Other';

export const ROUTES_CONFIG: CategoryRoutes[] = [
  {
    category: 'Cards',
    basePath: '/cards',
    routes: [
      { path: '/cancels', component: CardsPages.Cancels, label: 'Cancelamentos' },
      { path: '/doubts', component: CardsPages.Doubts, label: 'Dúvidas' },
      { path: '/internet', component: CardsPages.Internet, label: 'Internet' },
      { path: '/limits', component: CardsPages.Limits, label: 'Limites' },
      { path: '/pin-attempts', component: CardsPages.PinAttempts, label: 'Tentativas PIN' },
    ],
  },
  {
    category: 'Digital Channels - BimLine',
    basePath: '/digital-channels/bimline',
    routes: [
      { path: '/cancels', component: BimLinePages.Cancels, label: 'Cancelamentos' },
      { path: '/pin-accesses', component: BimLinePages.PinAccesses, label: 'Acessos PIN' },
    ],
  },
  {
    category: 'Digital Channels - Internet Banking',
    basePath: '/digital-channels/internet-banking',
    routes: [
      { path: '/accesses', component: InternetBankingPages.Accesses, label: 'Acessos' },
      { path: '/cancels', component: InternetBankingPages.Cancels, label: 'Cancelamentos' },
      { path: '/errors', component: InternetBankingPages.Errors, label: 'Erros' },
      { path: '/limits', component: InternetBankingPages.Limits, label: 'Limites' },
    ],
  },
  {
    category: 'Digital Channels - Mobile Banking',
    basePath: '/digital-channels/mobile-banking',
    routes: [
      { path: '/accesses', component: MobileBankingPages.Accesses, label: 'Acessos' },
      { path: '/cancels', component: MobileBankingPages.Cancels, label: 'Cancelamentos' },
      { path: '/doubts', component: MobileBankingPages.Doubts, label: 'Dúvidas' },
      { path: '/errors', component: MobileBankingPages.Errors, label: 'Erros' },
      { path: '/limits', component: MobileBankingPages.Limits, label: 'Limites' },
      { path: '/otp-release', component: MobileBankingPages.OTPRelease, label: 'Liberação OTP' },
      { path: '/top-ups', component: MobileBankingPages.TopUps, label: 'Recarregamentos' },
    ],
  },
  {
    category: 'Current Accounts',
    basePath: '/current-accounts',
    routes: [
      { path: '/balances', component: CurrentAccountsPages.Balances, label: 'Consulta de Saldo' },
      {
        path: '/data-updates',
        component: CurrentAccountsPages.DataUpdates,
        label: '(Re)abertura / Actualização de Dados',
      },
      {
        path: '/doubts',
        component: CurrentAccountsPages.Doubts,
        label: 'Dúvidas de Movimentos/Taxas',
      },
      {
        path: '/loans-not-received',
        component: CurrentAccountsPages.LoansNotReceived,
        label: 'Créditos não Recebidos',
      },
    ],
  },
  {
    category: 'Loans',
    basePath: '/loans',
    routes: [
      { path: '/captives', component: LoansPages.Captives, label: 'Cativos' },
      {
        path: '/clarifications',
        component: LoansPages.Clarifications,
        label: 'Esclarecimentos sobre o Crédito',
      },
      { path: '/eligibility', component: LoansPages.Eligibility, label: 'Elegibilidade' },
      { path: '/simulations', component: LoansPages.Simulations, label: 'Pedido de Simulação' },
    ],
  },
  {
    category: 'Complaints',
    basePath: '/complaints',
    routes: [
      {
        path: '/complaints-digital-wallets',
        component: ComplaintsPages.ComplaintsDigitalWallets,
        label: 'Reclamação e Carteiras Móveis',
      },
      { path: '/consults', component: ComplaintsPages.Consults, label: 'Consulta Reclamação' },
      {
        path: '/digital-wallets',
        component: ComplaintsPages.DigitalWallets,
        label: 'Consulta Carteiras Móveis',
      },
    ],
  },
  {
    category: 'Other Services',
    basePath: '/other-services',
    routes: [
      { path: '/cheques', component: OtherPages.Cheques, label: 'Cheques' },
      { path: '/mtop-issues', component: OtherPages.MtopIssues, label: 'Questões MTOP' },
      { path: '/pos-merchants', component: OtherPages.PosMerchants, label: 'Comerciantes POS' },
      {
        path: '/sim-validations',
        component: OtherPages.SimValidations,
        label: 'Validação/Troca SIM',
      },
      { path: '/term-deposits', component: OtherPages.TermDeposits, label: 'Depósitos a Prazos' },
    ],
  },
];

export const getRecordsForOutlet = (): RecordsRouteConfig[] => {
  return ROUTES_CONFIG.flatMap((category) =>
    category.routes.map((route) => ({
      path: `${category.basePath.slice(1)}${route.path}`,
      component: route.component,
      label: route.label,
    }))
  );
};
