import {
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/clerk-react";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <Dashboard />
      </SignedIn>
    </header>
  );
}

export default App;
