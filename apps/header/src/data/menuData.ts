import type { MenuItem, SidebarItem, SubmenuItem, SubmenuLinkItemProps } from 'src/types/types';

export const sidebarMapData: SidebarItem[] = [
  {
    id: 'home',
    icon: 'home',
    label: 'Início',
    path: '/home',
  },
  {
    id: 'registos',
    icon: 'register',
    label: 'Registos',
  },
  {
    id: 'outbounds',
    icon: 'makePhoneCall',
    label: 'Outbounds',
    path: '/outbounds',
  },
  {
    id: 'vendas',
    icon: 'shoppingBag',
    label: 'Vendas',
    path: '/vendas',
  },
  {
    id: 'scripts',
    icon: 'info',
    label: 'Scripts',
    path: '/scripts',
  },
  {
    id: 'documentacao',
    icon: 'files',
    label: 'Documentação',
  },
  {
    id: 'kpis',
    icon: 'graph2',
    label: "KPI's",
    path: '/kpis',
  },
];

export const bottomSidebarMapData: SidebarItem[] = [
  {
    id: 'definicoes',
    icon: 'config',
    label: 'Definições',
    path: '/config',
  },
  {
    id: 'pesquisa',
    icon: 'search',
    label: 'Pesquisa',
  },
];

export const menuMapData: MenuItem[] = [
  {
    id: 'canais-digitais',
    label: 'Canais Digitais',
    parentSidebarId: 'registos',
    submenuIds: ['mobile-banking-izi-smart-izi-submenu'],
  },
  {
    id: 'cartoes',
    label: 'Cartões',
    parentSidebarId: 'registos',
    submenuIds: ['cartoes-submenu'],
  },
  {
    id: 'contas-a-ordem',
    label: 'Contas à Ordem',
    parentSidebarId: 'registos',
    submenuIds: ['contas-a-ordem-submenu'],
  },
  {
    id: 'creditos',
    label: 'Créditos',
    parentSidebarId: 'registos',
    submenuIds: ['creditos-submenu'],
  },
  {
    id: 'reclamacoes',
    label: 'Reclamações',
    parentSidebarId: 'registos',
    submenuIds: ['reclamacoes-submenu'],
  },
  {
    id: 'outros-servicos',
    label: 'Outros Serviços',
    parentSidebarId: 'registos',
    submenuIds: ['outros-servicos-submenu'],
  },
];

export const submenuMapData: SubmenuItem[] = [
  {
    id: 'mobile-banking-submenu',
    label: 'Mobile Banking (IZI/SMART IZI)',
    parentMenuId: 'canais-digitais',
    submenuLinksIds: [
      'acessos',
      'cancelamento-bloqueio',
      'limites-transaccionais',
      'recargas',
      'erros-da-aplicacao',
      'duvidas-de-instalacao-app-smart-izi',
      'libertacao-otp',
    ],
  },
  {
    id: 'cartoes-submenu',
    label: 'Cartões',
    parentMenuId: 'cartoes',
    submenuLinksIds: [
      'limites-transaccionais',
      'cancelamento-bloqueio',
      'aumento-tentativas-pin',
      'duvidas',
      'utilizcao-na-internet',
    ],
  },
  {
    id: 'contas-a-ordem-submenu',
    label: 'Contas à ordem',
    parentMenuId: 'contas-a-ordem',
    submenuLinksIds: [
      'reabertura-actualizacao-de-dados',
      'duvidas-de-movimentos-taxas',
      'consulta-de-saldo',
      'creditos-nao-recebidos',
    ],
  },
  {
    id: 'creditos-submenu',
    label: 'Créditos',
    parentMenuId: 'creditos',
    submenuLinksIds: [
      'elegibilidade',
      'pedido-de-simulacao',
      'cativos',
      'esclarecimentos-sobre-o-credito',
    ],
  },
  {
    id: 'reclamacoes-submenu',
    label: 'Reclamações',
    parentMenuId: 'reclamacoes',
    submenuLinksIds: [
      'consulta-reclamacao',
      'consulta-carteiras-moveis',
      'reclamacao-e-carteiras-moveis',
    ],
  },
  {
    id: 'outros-servicos-submenu',
    label: 'Outros Serviços',
    parentMenuId: 'outros-servicos',
    submenuLinksIds: [
      'validacao-troca-sim',
      'depositos-a-prazos',
      'cheques',
      'comerciantes-pos',
      'cancelamento-seguros',
      'questoes-mtop',
    ],
  },
];

export const submenuLinks: SubmenuLinkItemProps[] = [
  // Registos > Canais Digitais
  {
    id: 'acessos',
    label: 'Acessos',
    path: '/registos/canais-digitais/mobile-banking/acessos',
    parentSubmenuId: 'mobile-banking-submenu',
  },
  {
    id: 'cancelamento-bloqueio',
    label: 'Cancelamento/Bloqueio',
    path: '/registos/canais-digitais/mobile-banking/cancelamento-bloqueio',
    parentSubmenuId: 'mobile-banking-submenu',
  },
  {
    id: 'limites-transaccionais',
    label: 'Limites Transaccionais',
    path: '/registos/canais-digitais/mobile-banking/limites-transaccionais',
    parentSubmenuId: 'mobile-banking-submenu',
  },
  {
    id: 'recargas',
    label: 'Recargas',
    path: '/registos/canais-digitais/mobile-banking/recargas',
    parentSubmenuId: 'mobile-banking-submenu',
  },
  {
    id: 'erros-da-aplicacao',
    label: 'Erros da Aplicação',
    path: '/registos/canais-digitais/mobile-banking/erros-da-aplicacao',
    parentSubmenuId: 'mobile-banking-submenu',
  },
  {
    id: 'duvidas-de-instalacao-app-smart-izi',
    label: 'Dúvidas de Instalação App - Smart IZI',
    path: '/registos/canais-digitais/mobile-banking/duvidas-de-instalacao-app-smart-izi',
    parentSubmenuId: 'mobile-banking-submenu',
  },
  {
    id: 'libertacao-otp',
    label: 'Libertação OTP',
    path: '/registos/canais-digitais/mobile-banking/libertacao-otp',
    parentSubmenuId: 'mobile-banking-submenu',
  },
  // Registos > Cartões
  {
    id: 'limites-transaccionais',
    label: 'Limites Transaccionais',
    path: '/registos/cartoes/limites-transaccionais',
    parentSubmenuId: 'cartoes-submenu',
  },
  {
    id: 'cancelamento-bloqueio',
    label: 'Cancelamento/Bloqueio',
    path: '/registos/cartoes/cancelamento-bloqueio',
    parentSubmenuId: 'cartoes-submenu',
  },
  {
    id: 'aumento-tentativas-pin',
    label: 'Aumento Tentativas PIN',
    path: '/registos/cartoes/aumento-tentativas-pin',
    parentSubmenuId: 'cartoes-submenu',
  },
  {
    id: 'duvidas',
    label: 'Dúvidas',
    description: 'Utilização / Movimentos / Taxas',
    path: '/registos/cartoes/duvidas',
    parentSubmenuId: 'cartoes-submenu',
  },
  {
    id: 'utilizacao-na-internet',
    label: 'Utilização na Internet',
    description: 'E-commerce / VBV',
    path: '/registos/cartoes/utilizacao-na-internet',
    parentSubmenuId: 'cartoes-submenu',
  },
  // Registos > Contas à Ordem
  {
    id: 'reabertura-actualizacao-de-dados',
    label: '(Re)abertura / Actualização de Dados',
    path: '/registos/contas-a-ordem/reabertura-actualizacao-de-dados',
    parentSubmenuId: 'contas-a-ordem-submenu',
  },
  {
    id: 'duvidas-de-movimentos-taxas',
    label: 'Dúvidas de Movimentos/Taxas',
    path: '/registos/contas-a-ordem/duvidas-de-movimentos-taxas',
    parentSubmenuId: 'contas-a-ordem-submenu',
  },
  {
    id: 'consulta-de-saldo',
    label: 'Consulta de Saldo',
    path: '/registos/contas-a-ordem/consulta-de-saldo',
    parentSubmenuId: 'contas-a-ordem-submenu',
  },
  {
    id: 'creditos-nao-recebidos',
    label: 'Créditos não Recebidos',
    path: '/registos/contas-a-ordem/creditos-nao-recebidos',
    parentSubmenuId: 'contas-a-ordem-submenu',
  },
];
