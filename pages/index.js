import Layout from "../components/UI/Layout";
import Notes from "../components/partials/Notes";
import New from "../components/partials/New";

const Home = () => {
  return (
    <Layout>
      <New />
      <Notes />
    </Layout>
  );
};

export default Home;
