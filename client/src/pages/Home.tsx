import { useEffect, useState, useCallback } from 'react';

import { SmileySmiley } from '@/assets';
import { Button } from '@/components';

const Timer = () => {
  const [time, setTime] = useState(0);

  const adjustTime = useCallback(() => setTime((prevTime) => prevTime + 1), []);

  useEffect(() => {
    console.log(`Timer run ${Math.random()}`);
    const timerInterval = setInterval(adjustTime, 1000);

    return () => clearInterval(timerInterval);
  }, [adjustTime]);

  return <p>Time elapsed: {time} seconds</p>;
};

const Home = () => {
  const [isShowing, setIsShowing] = useState<boolean>(false);

  return (
    <section>
      <div data-testid="home" className="yeah__nice">
        <h1>Yeah Nice</h1>
        <SmileySmiley title="smiley" />
      </div>
      <Button
        text={isShowing ? 'Hide Info' : 'SHOW'}
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
      <Timer />
    </section>
  );
};

export default Home;
