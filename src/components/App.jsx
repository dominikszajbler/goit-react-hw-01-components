import React from 'react';

import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistic/Statistic';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import user from '../data/user.json';
import statsData from '../data/stats.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';


 export const App = () => (
  <>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statsData} />
    <FriendList title="FriendList" friends={friends} />
    <TransactionHistory
      title="Transaction history"
      transactions={transactions}
    />
  </>
);