import { ShowProfileWithFollowers } from './ShowProfileWithFollowers';
import { ShowVideoTile } from './ShowVideoTile';
import { ShowProfile } from './ShowProfile';
import { ShowProjects } from './ShowProjects';
import { ShowHabitsWithArchive } from './ShowHabitsWithArchive';
import { ShowPosts } from './ShowPosts';
import { ShowVideos } from './ShowVideos';
import { ShowHabits } from './ShowHabits';
import { ShowTodoLists } from './ShowTodoLists';
import { ShowProducts } from './ShowProducts';

export function PractiseSetSix() {
  return (
    <div>
      <ShowProducts />
      <hr />
      <ShowTodoLists />
      <hr />
      <ShowHabits />
      <hr />
      <ShowVideos />
      <hr />
      <ShowPosts />
      <hr />
      <ShowHabitsWithArchive />
      <hr />
      <ShowProjects />
      <hr />
      <ShowProfile />
      <hr />
      <ShowVideoTile />
      <hr />
      <ShowProfileWithFollowers />
    </div>
  );
}
