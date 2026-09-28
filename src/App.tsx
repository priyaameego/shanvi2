
import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import { RootLayout } from './layouts/RootLayout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Clients from './pages/Clients';
import Career from './pages/Career';
import Contact from './pages/Contact';

const rootRoute = createRootRoute({
  component: RootLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/aboutus',
  component: AboutUs,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/ourservices',
  component: Services,
});

const clientsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/clients',
  component: Clients,
});

const careerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/career',
  component: Career,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  servicesRoute,
  clientsRoute,
  careerRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
