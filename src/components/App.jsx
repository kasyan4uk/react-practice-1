import user from './Profile/user.json';
import { Profile } from './Profile/Profile';

import data from './Statistics/data.json'
import { Statistic } from './Statistics/Statistics';

import { Box } from './Box';


export const App = () => {
  return (
    <Box>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title='Upload stats' stats={data} />
    </Box>
  )
};
