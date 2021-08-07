//creating the Store
import { createStore } from "redux";
import { mainreducer } from "./Reducer";

const Store = createStore(mainreducer);

export default Store;
