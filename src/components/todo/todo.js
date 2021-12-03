import React, { useEffect, useState, useContext } from 'react';
import useForm from '../../hooks/form.js';

import { v4 as uuid } from 'uuid';
import { SettingsContext } from '../../context/settings.js'

import { Button, Card, Elevation, Switch} from "@blueprintjs/core";

const ToDo = () => {

  const settings = useContext(SettingsContext);
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);

  const [firstIndexPerPage, setFirstIndexPerPage] = useState(0);
  const [lastIndexPerPage, setLastIndexPerPage] = useState(settings.displayNumberOfItems);

  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map( item => {
      if ( item.id == id ) {
        item.complete = ! item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);


  function handleHide() {
    settings.setHide(!settings.hide)
  }

  function pagination() {
    let pageList = list.slice(firstIndexPerPage, lastIndexPerPage);
    return pageList;

    // let firstIndexPerPage = lastIndexPerPage - settings.displayNumberOfItems
    // return list.slice(firstIndexPerPage, lastIndexPerPage)
  }

  

  function next() {
    setFirstIndexPerPage(firstIndexPerPage + settings.displayNumberOfItems);
    setLastIndexPerPage(lastIndexPerPage + settings.displayNumberOfItems);
  }

  function previous() {
    setFirstIndexPerPage(firstIndexPerPage - settings.displayNumberOfItems);
    setLastIndexPerPage(lastIndexPerPage - settings.displayNumberOfItems);
  }


  return (
    <>
      <header>
        <h1>To Do List: {incomplete} items pending</h1>
      </header>

      <Card interactive={true} elevation={Elevation.THREE}>
        <form onSubmit={handleSubmit}>

          <h2>Add To Do Item</h2>

          <label>
            <span>To Do Item</span>
            <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
          </label>

          <label>
            <span>Assigned To</span>
            <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
          </label>

          <label>
            <span>Difficulty</span>
            <input onChange={handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" />
          </label>

          <label>
            <button type="submit">Add Item</button>
          </label>
        </form>

        <Switch onChange={handleHide}>
          Hide Completed Items
        </Switch>

      </Card>

      {pagination().map((item, idx) => {
        if(settings.hide === false || item.complete === false) {
         return <div key={idx}>
            <p>{item.text}</p>
            <p><small>Assigned to: {item.assignee}</small></p>
            <p><small>Difficulty: {item.difficulty}</small></p>
            <Button onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</Button>
            <hr />
          </div>
        }})
      }
      <Button onClick={previous}>Previous</Button>
      <Button onClick={next}>Next</Button>
    </>
  );
};

export default ToDo;
