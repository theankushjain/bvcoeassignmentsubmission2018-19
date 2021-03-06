import Head from "next/head";
import Navbar from "./Navbar";

const Layout = props => (
  <div>
    <Head>
      <title>BVCOE Assignment</title>
<<<<<<< HEAD

=======
      <link rel="stylesheet" href="/_next/static/style.scss" />
>>>>>>> 0758b126889c92e96578992695b5c358693f02d0
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    </Head>
    <Navbar />
    <div>{props.children}</div>
    <style global jsx>{`
      body {
        background: #eee;
        font-family: "Nunito SemiBold";
      }

      #main h1 {
        color: #444;
        text-align: center;
      }

      #main {
        padding: 0px;
        box-sizing: border-box;
        width: 60%;
        height: 100%;
      }

      #book-list {
        padding: 0;
      }

      #book-list li {
        display: inline-block;
        margin: 12px;
        padding: 10px;
        border-radius: 4px;
        border: 1px solid #880e4f;
        box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
        cursor: pointer;
        color: #880e4f;
      }

      form {
        background: #fff;
        padding: 20px;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 400px;
      }

      form .field {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
      }

      form label {
        text-align: right;
        padding: 6px;
      }

      form input,
      form select {
        margin: 4px 0;
        padding: 6px;
        box-sizing: border-box;
      }

      form button {
        color: #fff;
        font-size: 2em;
        background: #ad1457;
        border: 0;
        padding: 0 10px;
        border-radius: 50%;
        cursor: pointer;
        position: absolute;
        bottom: 10px;
        left: 10px;
      }

      #book-details {
        position: fixed;
        top: 0;
        right: 0;
        width: 40%;
        height: 100%;
        background: #ad1457;
        padding: 30px;
        overflow: auto;
        box-shadow: -2px -3px 5px rgba(0, 0, 0, 0.3);
        box-sizing: border-box;
        color: #fff;
      }
    `}</style>
  </div>
);

export default Layout;
