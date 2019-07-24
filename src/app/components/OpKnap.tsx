import * as React from 'react';

export const OpKnap: (props: { onClick: () => void }) => React.ReactElement = props =>
    <button {...props}>Op</button>;
