import { Comments } from './Comments';
import { Chat } from './Chat';
import { MultiUserDetails } from './MultiUserDetails';
import { UserDetails } from './UserDetails';
import { Products } from './Products';
import { Users } from './Users';

export function PractiseSetFive() {
  return (
    <div>
      <Users />
      <hr />
      <Products />
      <hr />
      <UserDetails />
      <hr />
      <MultiUserDetails />
      <hr />
      <Chat />
      <hr />
      <Comments />
      <hr />
    </div>
  );
}
