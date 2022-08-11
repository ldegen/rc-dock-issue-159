import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import DockLayout  from 'rc-dock';
import Meassure from './Meassure'
import "rc-dock/dist/rc-dock.css";

const App = ()=>{
  const [layout, setLayout] = useState({
    dockbox: {
      mode: 'horizontal',
      children: [
        {
          id:'first',
          tabs: [{id:'foo', title:"Foo"}],
        },
        {
          id:'second',
          tabs: [{id:'bar', title:"Bar"}],
        },
      ]
    },
  });
  const handleLayoutChange = (layout, id, direction)=>{
    console.log(layout,id,direction);
    setLayout(layout);
  };
  const loadTab = ({id})=>({id, title:`Title of ${id}`, content:<Meassure label={id}/>});
  return (
    <DockLayout
      layout={layout}
      loadTab={loadTab}
      onLayoutChange={handleLayoutChange}
      style={{
        position: "absolute",
        left: 10,
        top: 10,
        right: 10,
        bottom: 10,
      }}
    />
  )
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
