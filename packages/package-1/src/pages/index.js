import * as X from "@monorepo/package-2";

const Home = () => {
  console.log();
  return (
    <div>
      package 1 <X.default.Button />
    </div>
  );
};

export default Home;
