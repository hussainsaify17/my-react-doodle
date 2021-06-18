import React, { useState } from "react";
import { PieChart } from 'react-minimal-pie-chart';
import withSubscription from "./HOC";
import FirstComponent from './first'
import SecondComponent from './second'
import Third from "./third";
import AceEditor from "react-ace";
import './App.css'
import ToggleButtons from "./filter/filter";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

// 117883

// const Label = props => {
//   if (props.dataEntry.title)
//     return (<>
//       <text {...props}>{`${props.dataEntry.title}`}</text>
//       <text {...props} y={props.y + 2}>{props.dataEntry.percentage}%</text>
//     </>
//     )
//   else return ''
// }

function App() {
  function onChange(newValue) {
    console.log("change", newValue);
  }
  // const [value, setValue] = useState('fcomponent')
  // let handleChange = (e) => {
  //   const { target: { value, name } } = e
  //   setValue(value)
  // }

  // const [value, updatevalue] = useState('blue')

  // let handleChange = (value) => {
  //   // let val = e.target.parentElement.innerText;
  //   updatevalue(value)
  // }
  return (
    <div className="App">
      <AceEditor
        mode="java"
        theme="github"
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
      />
      {/* <div id="togglebuttons">
        {['blue', 'green', 'yellow', 'pink', 'purple'].map(filter => {
          return <ToggleButtons
            key={filter}
            filter={filter}
            onChange={handleChange}
            selectedValue={value}
          />
        })}
      </div> */}
      {/* <PieChart
        lineWidth={20}
        radius={7}
        viewBoxSize={[100, 100]}
        labelPosition={0}
        labelStyle={{
          fontSize: "1.2px",
          fill: '#C13C39', //color property
        }}
        background="#E38627"
        center={[20, 20]}

        // children={}
        startAngle={270}
        totalValue={100}
        label={(labelRenderProps) => <Label key={Math.random()} {...labelRenderProps} />}
        // label={(labelRenderProps) => `${labelRenderProps.dataEntry.title}`}
        data={[
          { title: `SW not sent `, value: 50, color: '#E38627' },
          { title: '', value: 50, color: '#C13C39' },
        ]}
      >
      </PieChart>; */}
      {/* <input
        type="radio"
        checked={value === 'fcomponent'}
        name="rea"
        value="fcomponent"
        onChange={handleChange} />
      <input
        type="radio"
        checked={value === 'scomponent'}
        name="rea"
        value="scomponent"
        onChange={handleChange} /> */}
      {/* {value === 'fcomponent' ?
        <>
          <FirstComponent
            subscription={{
              "pair": ["XBT/USD"],
              "subscription": {
                "name": "ticker"
              }
            }} name="first" />

          <Third
            subscription={{
              "pair": ["XBT/EUR"],
              "subscription": {
                "name": "ticker"
              }
            }
            } name="third" />
        </> :
        <SecondComponent subscription={{
          "pair": ["XBT/EUR"],
          "subscription": {
            "name": "ticker"
          }
        }}
          name="second" />
      } */}
    </div>
  );
}

export default App