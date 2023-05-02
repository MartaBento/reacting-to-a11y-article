import "./App.css";
import Footer from "./components/common/footer/Footer";
import Navbar from "./components/common/header/Navbar";
import MainContainer from "./components/common/ui/FormContainer";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Navbar />
      <MainContainer />
      <Footer />
    </Layout>
  );
}

export default App;
