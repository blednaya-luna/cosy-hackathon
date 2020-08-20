import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { log, LOG_TYPE } from 'utils/log';
import { APP } from 'globalConstants';

export const AuthWavesKeeperButton = () => {
  const [wavesKeeperIsAuthorized, setWavesKeeperIsAuthorized] = useState(false);

  useEffect(() => {
    const { WavesKeeper } = window;
    if (WavesKeeper) {
      const checkIsAuthorized = async () => {
        await WavesKeeper
          .publicState()
          .then((res) => setWavesKeeperIsAuthorized(Boolean(res.account.address)))
          .catch((err) => log(err, LOG_TYPE.error));
      };
      checkIsAuthorized();
    }
  }, []);

  const auth = () => {
    const { WavesKeeper } = window;
    if (WavesKeeper) {
      WavesKeeper
        .auth({ data: APP })
        .then((res) => setWavesKeeperIsAuthorized(Boolean(res.address)))
        .catch((err) => log(err, LOG_TYPE.error));
    } else {
      log('Пожалуйста, установите WavesKeeper!', LOG_TYPE.error);
    }
  };

  return wavesKeeperIsAuthorized
    ? null
    : (
      <Button
        variant="outlined"
        color="inherit"
        onClick={auth}
      >
        Авторизовать WavesKeeper
      </Button>
    );
};
