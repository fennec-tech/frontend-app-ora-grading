import React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from '@edx/frontend-platform/i18n';
import { getConfig } from '@edx/frontend-platform';

import messages from './messages';

function Head() {
  const { formatMessage } = useIntl();
  return (
    <Helmet>
      <title>
        {formatMessage(messages.PageTitle, { siteName: getConfig().SITE_NAME })}
      </title>
      <link rel="shortcut icon" href={getConfig().FAVICON_URL} type="image/x-icon" />
    </Helmet>
  );
}

export default Head;
