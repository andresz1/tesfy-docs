import React, { FC, ComponentProps } from 'react';
import { Heading } from '@chakra-ui/core';

const H3: FC<ComponentProps<typeof Heading>> = props => {
  return <Heading as="h3" size="md" fontWeight="medium" {...props} />;
};

export default H3;
