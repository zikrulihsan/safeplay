import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '@/pages/HomePage';
import { ComingSoon } from '@/pages/ComingSoon';
import { ModuleLayout } from '@/components/layout/ModuleLayout';
import { MODULES } from '@/data/modules';

/**
 * Routes are generated from the MODULES registry: the hub lives at "/", each
 * available module renders its page inside ModuleLayout, and modules still in
 * progress render the ComingSoon placeholder. HashRouter keeps deep links and
 * refreshes working on any static host (Vite uses a relative `base`).
 */
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {MODULES.map((module) => (
          <Route
            key={module.slug}
            path={`/${module.slug}`}
            element={
              module.Component ? (
                <ModuleLayout>
                  <module.Component />
                </ModuleLayout>
              ) : (
                <ComingSoon module={module} />
              )
            }
          />
        ))}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}
