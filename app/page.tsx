import Header from "../app/component/Header/header";
import Footer from '../app/component/Footer/footer';
import Collection from "./collect/col";
import Price from "./price.tsx/pa";
import Contact from "./contact/cntac";

const Home = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-8 text-center">
        <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
        <p className="mt-4">Explore our amazing collection and prices.</p>
        <Collection/>
      <Price/>
      <Contact/>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
