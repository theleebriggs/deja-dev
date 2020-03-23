import { GetStaticProps, NextPage } from 'next';

type Props = {
  title: string;
};

const Home: NextPage<Props> = ({ title }: Props) => <h1>{title}</h1>;

export const getStaticProps: GetStaticProps = async () => {
  const title = 'Hello world 🖖';
  return { props: { title } };
};

export default Home;
