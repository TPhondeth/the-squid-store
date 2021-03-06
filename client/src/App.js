import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Success from "./pages/Success";
import Nav from "./components/Nav";
import { StoreProvider } from "./utils/GlobalState";
import OrderHistory from "./pages/OrderHistory";
import Footer from "./components/Footer";
import "./App.css";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Nav />

            {/* <Hero /> */}
            <Switch>
              {/* <Route exact path="/" component={Hero} /> */}

              <Route exact path="/" component={Home} />

              {/* <Route exact path="/" component={Hero} /> */}

              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/success" component={Success} />
              <Route exact path="/orderHistory" component={OrderHistory} />
              <Route exact path="/products/:id" component={Detail} />
              <Route component={NoMatch} />
            </Switch>
          </StoreProvider>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
