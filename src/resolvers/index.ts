import { merge } from 'lodash';
import User from "./User.resolver";
import Pet from "./Pet.resolver";


export default merge(User, Pet);
