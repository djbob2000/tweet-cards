import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { Container } from "./App.styled";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("../pages/Home/Home"));
const Tweets = lazy(() => import("../pages/Tweets/Tweets"));

function App() {
  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/tweets" element={<Tweets />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
