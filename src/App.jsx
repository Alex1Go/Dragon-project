import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SharedLayout from "./components/SharedLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
