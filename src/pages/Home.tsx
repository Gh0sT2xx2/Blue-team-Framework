import Layout from '@/components/layout/Layout';
import SectionList from '@/components/sections/SectionList';
import RealTimePanel from '@/components/alerts/RealTimePanel';
import { sections } from '@/data/sectionData';

export const Home = () => {
  return (
    <Layout>
      <main>
        <SectionList sections={sections} />
      </main>
      <aside>
        <RealTimePanel />
      </aside>
    </Layout>
  );
};

export default Home;