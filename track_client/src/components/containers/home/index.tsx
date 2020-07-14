import React from 'react';
import { Container, Typography } from '@material-ui/core';

import { TrackerService } from '../../../service';
import { TrackInfo } from '../../../service/tracker';
import TrackInfoComponent from './elements/info';

const HomeContainer: React.FC = () => {
  const [hasError, toggleError] = React.useState<boolean>(false);
  const [trackInfo, setTrackInfo] = React.useState<TrackInfo>();

  React.useEffect(() => {
    (async () => {
      try {
        const info = await TrackerService.getInstance().getScript();
        setTrackInfo(info);
      } catch (err) {
        console.error(err);
        toggleError(true);
      }
    })();
  }, []);

  return (
    <Container maxWidth="md">
      <Typography variant="h1" component="h1" gutterBottom align="center">
        Tracking app
        <span role="img" aria-label="">
          😎
        </span>
      </Typography>

      <TrackInfoComponent hasError={hasError} info={trackInfo} />
    </Container>
  );
};

export default HomeContainer;
