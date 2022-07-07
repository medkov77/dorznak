import Header from "./app/components/ui/header/header";
import NavBar from "./app/components/ui/navBar";
import MainContent from "./app/components/layouts/mainContent";
import AppLoader from "./app/components/ui/hoc/appLoader";

function App() {
    return (
        <AppLoader>
            <Header />
            <NavBar />
            <MainContent />
        </AppLoader>
    );
}

export default App;
