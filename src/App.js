import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './component/Blog/Blog';
import Error from './component/Error/Error';
import Home from './component/Home/Home';
import Quiz from './component/Quiz/Quiz';
import Statistic from './component/Statistic/Statistic';
import Main from './layout/Main';

function App() {
  const route = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {path:'/',
        loader: async () => {
          return fetch(`https://openapi.programming-hero.com/api/quiz`);
        }, 
        element:<Home></Home>},
        {
          path:'/home', 
          loader: async () => {
            return fetch(`https://openapi.programming-hero.com/api/quiz`);
          },
          element:<Home></Home>
        },
        {
          path:'/quiz/:quizId',
          loader: async({params}) =>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <Quiz></Quiz>
        },
        {
          path:'/stat', 
          loader: async () => {
            return fetch(`https://openapi.programming-hero.com/api/quiz`);
          },
          element: <Statistic></Statistic>
        },
        {path:'/blog', element: <Blog></Blog>}
      ]
    },
    {path:'*', element: <Error></Error> }
  ])
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
