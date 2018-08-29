import Layout from "../components/Layout";

const About = () => (
  <Layout>
    <div>
      <h1>About Assignment</h1>
      <p>
        This assignment was submitted to posist technologies. There are two
        types of nodes. One is genesis node and other is simple node. Genesis
        node don't have a parent node. Every simple node has a parent node as
        well as a genesis node. The user can add a node along with its parent.
        The child nodes of any node can also be seen by the user.
      </p>
    </div>
  </Layout>
);

export default About;
