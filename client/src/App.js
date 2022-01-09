import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Static } from "./Static";

function App() {
  return (
    <div className="layout">
    <Header />
     <main>
      { Static.content}
     </main>
     <Footer />
    </div>
  );
}

export default App;
