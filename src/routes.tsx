import { StatusBar } from "expo-status-bar";
import { FloatBag } from "./components/FloatBag";
import { Home } from "./pages/Home";

export function Routes() {
  return (
    <>
      <Home />
      <FloatBag />
    </>
  );
}
