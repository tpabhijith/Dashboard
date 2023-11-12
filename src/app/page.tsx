import { Header } from "../components/includes";
import { HomeScreen } from "../screens";
import { getServerSideProps } from "../components/assets/utils/StoreData";

export default function Home() {
    getServerSideProps();
    return (
        <div>
            <Header />
            <HomeScreen />
        </div>
    );
}
