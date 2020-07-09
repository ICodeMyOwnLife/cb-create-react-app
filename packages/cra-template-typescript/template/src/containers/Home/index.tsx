import React, { FC, memo } from 'react';

export const HomeComponent: FC = () => <h1>Home</h1>;

const Home = memo(HomeComponent);
Home.displayName = 'Home';
export default Home;
