import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { Container } from "./App.styled";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("../pages/Home/Home"));
const Tweets = lazy(() => import("../pages/Tweets/Tweets"));

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/tweets" element={<Tweets />} />
          </Suspense>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
