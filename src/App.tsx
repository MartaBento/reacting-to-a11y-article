import Footer from "@components/common/footer/Footer";
import Navbar from "@components/common/header/Navbar";
import MainContainer from "@components/common/ui/MainContainer";
import Layout from "@components/layout/Layout";
import "./App.css";

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
