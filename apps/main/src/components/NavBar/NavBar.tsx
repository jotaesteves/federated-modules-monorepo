import * as React from 'react';
import { Route, Routes, Link, matchPath, useLocation } from 'react-router';

function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

function MyTabs() {
  // You need to provide the routes in descendant order.
  // This means that if you have nested routes like:
  // users, users/new, users/edit.
  // Then the order should be ['users/add', 'users/edit', 'users'].
  const routeMatch = useRouteMatch(['/vision-360/*', '/app-2/*', '/css-demo', '/']);
  const currentTab = routeMatch?.pattern?.path ?? '/';

  const tabStyle = (active: boolean): React.CSSProperties => ({
    padding: '8px 12px',
    borderBottom: active ? '2px solid #1976d2' : '2px solid transparent',
    color: active ? '#1976d2' : 'inherit',
    textDecoration: 'none',
    display: 'inline-block',
  });

  return (
    <nav aria-label="Primary">
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          gap: 16,
          padding: 0,
          margin: 0,
          borderBottom: '1px solid #e0e0e0',
        }}
      >
        <li>
          <Link to="/" style={tabStyle(currentTab === '/')}>
            Root
          </Link>
        </li>
        <li>
          <Link to="/vision-360" style={tabStyle(currentTab === '/vision-360/*')}>
            Vision 360
          </Link>
        </li>
        <li>
          <Link to="/app-2" style={tabStyle(currentTab === '/app-2/*')}>
            App 2
          </Link>
        </li>
        <li>
          <Link to="/css-demo" style={tabStyle(currentTab === '/css-demo')}>
            CSS Demo
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function CurrentRoute() {
  const location = useLocation();

  return (
    <p style={{ paddingBottom: 8, color: 'rgba(0,0,0,0.6)', margin: 0 }}>
      Current route: {location.pathname}
    </p>
  );
}

const NavBar: React.FC = () => (
  <div style={{ width: '100%' }}>
    <Routes>
      <Route path="*" element={<CurrentRoute />} />
    </Routes>
    <MyTabs />
  </div>
);

export default NavBar;
