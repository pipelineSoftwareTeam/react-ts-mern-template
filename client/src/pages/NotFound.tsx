import { Link } from 'react-router-dom';

const NotFound = () => (
  <section>
    <h1>Not Found</h1>
    <Link to="/">
      <button type="button">GO HOME</button>
    </Link>
  </section>
);

export default NotFound;
