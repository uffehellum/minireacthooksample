import React from 'react';

export const NedKnap: (props: {onClick: ()=>void}) => React.ReactElement = props =>
    <button {...props}>Ned</button>;

