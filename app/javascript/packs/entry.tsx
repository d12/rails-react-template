import React from "react";
import ApplicationRoot from "./components/ApplicationRoot";

import { createRoot } from 'react-dom/client';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

interface Props {

}

// There's no clean way to move data from the Rails layer to the React layer on load right now.
// This is a hack.
const node = document.getElementById('root-data');
const attributeNames = node.getAttributeNames();
const dataAttributeNames = attributeNames.filter((s) => s.startsWith("data-"));

const data = dataAttributeNames.reduce(function (map, obj) {
  const keyWithoutDataPrefix = obj.slice(5);
  map[keyWithoutDataPrefix] = node.getAttribute(obj);
  return map;
}, {});

document.addEventListener('DOMContentLoaded', () => {
  const container = document.body.appendChild(document.createElement('div'));
  const root = createRoot(container);
  root.render(<ApplicationRoot data={data} />);
})
