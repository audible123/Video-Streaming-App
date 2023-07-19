import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Children } from 'react';
import MainContainer from './components/MainContainer';
import WatchVideo from './components/VideoCode/WatchVideo';
import Channel from './components/Channel/Channel';
import rough from './rough';


const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>,
    },
    {
      path:"watch/:id",
      element:<WatchVideo/>,
    },
    {
      path:"channel/:id",
      element:<Channel/>,
    },
    {
      path:"rough",
      element:<rough/>,
    }
  ], 
}])


function App() {
  return (
    <Provider store={store}> 
    <div>
    <Header/>
    <RouterProvider router={appRouter}>

    </RouterProvider>
    </div>
    </Provider>
  );
}

export default App;
