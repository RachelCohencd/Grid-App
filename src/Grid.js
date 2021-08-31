import React from 'react';


const Grid = ({ config, data }) => (
  <table>
    <thead>
    <tr>
     {config.map(c=><th>{c.title}</th>)}
    </tr>
    </thead>
    <tbody>
    {data.map(item=>{return(<tr>{config.map(col=>{return<td>{item[col.field]}</td>})}</tr>)})}
    </tbody>
  </table>
);

export default Grid;
