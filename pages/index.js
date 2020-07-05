import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  learn: {
      id:             'greeting',
      defaultMessage: 'привет',
  },
});

export default function Home() {
  const intl = useIntl();

  return (
    <div>
      <h1>{intl.formatMessage(messages.learn)}</h1>
    </div>
  )
}
