import { useState } from 'react';

import { SmileySmiley } from '@/assets';
import { Button } from '@/components';

const Home = () => {
  const [isShowing, setIsShowing] = useState<boolean>(false);

  return (
    <section>
      <div data-testid="home" className="yeah__nice">
        <h1>Yeah Nice</h1>
        <SmileySmiley title="smiley" />
      </div>
      <Button
        text={isShowing ? 'Hide Info' : 'Show Info'}
        onClick={() => setIsShowing(!isShowing)}
      />
      {isShowing && (
        <p>
          This is a full stack MERN app template, with TypeScript and React
          testing library + MSW. It also contains a basic CSS reset with some
          variables set up that can be used for building apps with native CSS
          and styled components - if desired.
        </p>
      )}
      <span style={{ marginTop: '2rem', textAlign: 'center' }}>
        See the GitHub repo for more info <br />
        👇🏻{' '}
      </span>
      <a
        target="_blank"
        href="https://github.com/pipelineSoftwareTeam/react-ts-mern-template"
        rel="noreferrer"
      >
        Top Secret Repo
      </a>
    </section>
  );
};

export default Home;
