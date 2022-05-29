import AboutPage from "../components/about";
import AppBar from "../components/appbar";
import BlogsPage from "../components/blogs";
import FeaturePage from "../components/feature";
import Footer from "../components/footer";
import Home from "../components/home";
import ShopPage from "../components/shop";

const MainPage = () =>{
    return <div className="bg-light">
        <AppBar />
        <Home/>
        <ShopPage/>
        <AboutPage />
        <FeaturePage />
        <BlogsPage />
        <Footer />
    </div>
}

export default MainPage;