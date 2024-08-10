import Header from "@/components/Header";
import Hero from "@/components/Home/Hero";
import MountainsGrid from "@/components/Home/Mountains";
import Layout from "@/components/Layout";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <div className="absolute top-0 z-10 translate-y-[100vh]">
        <MountainsGrid />      
      </div>
    </Layout>
  );
}

export default HomePage