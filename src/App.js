import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
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
        {path:'/stat', element: <Statistic></Statistic>}
      ]
    },
    {path:'*', element: <p>error route. Not found: 404 -_-</p> }
  ])
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
