import { Route, Routes } from 'react-router-dom';
import { PracticeSetEight } from './PracticeSetEight';
import { QuestionAnswer } from './QuestionAnswer';
import { Questions } from './Questions';
import { Answer } from './Answer';
import { ProductList } from './ProductList';
import { Cart } from './Cart';
import { About } from './About';
import { WishList } from './WishList';
import { Todo } from './Todo';
import { DoneTodo } from './DoneTodo';
import { PendingTodo } from './PendingTodo';
import { TodoDetail } from './TodoDetail';
import { ErrorPage } from './ErrorPage';

export function PracticeSetEightRoutes() {
  return (
    <Routes>
      <Route path="/products" element={<ProductList />} />
      <Route path="/" element={<PracticeSetEight />} />
      <Route path="/*" element={<ErrorPage />} />
      <Route path="/products/wishlist" element={<WishList />} />
      <Route path="/products/cart" element={<Cart />} />
      <Route path="/products/about/:productId" element={<About />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/todo/done" element={<DoneTodo />} />
      <Route path="/todo/open" element={<PendingTodo />} />
      <Route path="/todo/:todoId" element={<TodoDetail />} />
      <Route path="/qna/questions" element={<Questions />} />
      <Route path="/qna" element={<QuestionAnswer />} />
      <Route path="/qna/answer/:questionId" element={<Answer />} />
    </Routes>
  );
}
