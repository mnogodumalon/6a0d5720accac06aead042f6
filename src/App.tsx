import '@/lib/sentry';
import { lazy, Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ActionsProvider } from '@/context/ActionsContext';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ErrorBusProvider } from '@/components/ErrorBus';
import { Layout } from '@/components/Layout';
import DashboardOverview from '@/pages/DashboardOverview';
import AdminPage from '@/pages/AdminPage';
import MitarbeiterverwaltungPage from '@/pages/MitarbeiterverwaltungPage';
import KundenverwaltungPage from '@/pages/KundenverwaltungPage';
import MotivkatalogPage from '@/pages/MotivkatalogPage';
import MaterialverwaltungPage from '@/pages/MaterialverwaltungPage';
import AuftragsverwaltungPage from '@/pages/AuftragsverwaltungPage';
import RechnungsverwaltungPage from '@/pages/RechnungsverwaltungPage';
import PublicFormMitarbeiterverwaltung from '@/pages/public/PublicForm_Mitarbeiterverwaltung';
import PublicFormKundenverwaltung from '@/pages/public/PublicForm_Kundenverwaltung';
import PublicFormMotivkatalog from '@/pages/public/PublicForm_Motivkatalog';
import PublicFormMaterialverwaltung from '@/pages/public/PublicForm_Materialverwaltung';
import PublicFormAuftragsverwaltung from '@/pages/public/PublicForm_Auftragsverwaltung';
import PublicFormRechnungsverwaltung from '@/pages/public/PublicForm_Rechnungsverwaltung';
// <public:imports>
// </public:imports>
// <custom:imports>
const NeuenAuftragErstellenPage = lazy(() => import('@/pages/intents/NeuenAuftragErstellenPage'));
const AuftragsabschlussRechnungPage = lazy(() => import('@/pages/intents/AuftragsabschlussRechnungPage'));
// </custom:imports>

export default function App() {
  return (
    <ErrorBoundary>
      <ErrorBusProvider>
        <HashRouter>
          <ActionsProvider>
            <Routes>
              <Route path="public/6a0d56eff6d306d245e80892" element={<PublicFormMitarbeiterverwaltung />} />
              <Route path="public/6a0d56f7256dd49a8280fee1" element={<PublicFormKundenverwaltung />} />
              <Route path="public/6a0d56f72007191e2edd78fb" element={<PublicFormMotivkatalog />} />
              <Route path="public/6a0d56f855253e52842348cf" element={<PublicFormMaterialverwaltung />} />
              <Route path="public/6a0d56f99f9d316918f2d2d8" element={<PublicFormAuftragsverwaltung />} />
              <Route path="public/6a0d56f9435ab60a2ee330a8" element={<PublicFormRechnungsverwaltung />} />
              {/* <public:routes> */}
              {/* </public:routes> */}
              <Route element={<Layout />}>
                <Route index element={<DashboardOverview />} />
                <Route path="mitarbeiterverwaltung" element={<MitarbeiterverwaltungPage />} />
                <Route path="kundenverwaltung" element={<KundenverwaltungPage />} />
                <Route path="motivkatalog" element={<MotivkatalogPage />} />
                <Route path="materialverwaltung" element={<MaterialverwaltungPage />} />
                <Route path="auftragsverwaltung" element={<AuftragsverwaltungPage />} />
                <Route path="rechnungsverwaltung" element={<RechnungsverwaltungPage />} />
                <Route path="admin" element={<AdminPage />} />
                {/* <custom:routes> */}
                <Route path="intents/neuen-auftrag-erstellen" element={<Suspense fallback={null}><NeuenAuftragErstellenPage /></Suspense>} />
                <Route path="intents/auftragsabschluss-rechnung" element={<Suspense fallback={null}><AuftragsabschlussRechnungPage /></Suspense>} />
                {/* </custom:routes> */}
              </Route>
            </Routes>
          </ActionsProvider>
        </HashRouter>
      </ErrorBusProvider>
    </ErrorBoundary>
  );
}
