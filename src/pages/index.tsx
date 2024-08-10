import Header from "@/components/Header";
import Hero from "@/components/Home/Hero";
import MountainsGrid from "@/components/Home/Mountains";
import Layout from "@/components/Layout";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <MountainsGrid />      
    </Layout>
  );
}

export default HomePage