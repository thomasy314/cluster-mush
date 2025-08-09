import ClusterMushLogo from "./assets/logo.svg";

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <img
        src={ClusterMushLogo}
        className="w-100 mb-5"
        alt="Cluster Mush Logo"
      />
      <div className="flex flex-col lg:w-1/2 w-3/4">
        <p className="mb-5 mr-auto">Hello!</p>
        <p className="mb-5 text-justify">
          Thank you for showing interest in Cluster Mush. For the time being,
          I’ll be stepping away from creating and learning on behalf of Cluster
          Mush, and instead taking some time for myself. It has truly been the
          journey of a lifetime to bring Cluster Mush to life. It has fueled my
          passion for learning and creating, and has given me the chance to meet
          some of the most amazing people and take part in unforgettable events.
          Thank you to everyone who has supported me either through
          encouragement or by buying something.
        </p>
        <div className="flex flex-col items-end">
          <p>Best Wishes,</p>
          <p className="ml-auto">Tom</p>
        </div>
      </div>
    </div>
  );
}

export default App;
