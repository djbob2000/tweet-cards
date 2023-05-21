import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { Container } from "./App.styled";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("../pages/Home/Home"));
const Tweets = lazy(() => import("../pages/Tweets/Tweets"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/tweets" element={<Tweets />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Container>
    </Suspense>
  );
}

export default App;
