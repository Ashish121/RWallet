import React from 'react';
import { FormattedMessage } from 'react-intl';

interface TranslateProps  {
    message: string,
    value?: any
}

const Translate: React.FC<TranslateProps> = ({message, value}) => (
  <FormattedMessage id={message} defaultMessage={message} values={{...value}}/>
);

export { Translate };
 