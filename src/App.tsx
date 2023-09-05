import React from "react";
import { GlobalStyles, theme } from "./styles";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Login from "./pages/Login";
import Receivings from "./pages/Receivings";
import Receiving from "./pages/Receiving";
import Layout from "./templates/Layout";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<Layout />}>
              <Route path="/receivings" element={<Receivings />} />
              <Route path="/receivings/:id" element={<Receiving />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
