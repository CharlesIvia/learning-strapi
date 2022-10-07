import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

//Page and layout imports
import { Home } from "./pages/Home";
import { Categories } from "./pages/Categories";
import { Review } from "./pages/Review";
import { SiteHeader } from "./components/SiteHeader";

//apollo client

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <SiteHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories/:id" element={<Categories />} />
            <Route path="/review/:id" element={<Review />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
