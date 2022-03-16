import React, { Suspense } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/error/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import { frontRoutes } from './routes/routes';
import { Provider } from "react-redux";
import store from './store/store';

function App() {
  const routes = [...frontRoutes];

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Suspense fallback={<div>Loading... </div>}>
            <Routes>
              {routes.map((route, idx) => (
                route.component && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact ?? false}
                    name={route.name}
                    element={<route.component />}
                  />
                )
              ))}
              <Route
                path="*"
                element={<NotFound />}
              />
            </Routes>
          </Suspense>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
