import {readFileSync} from 'fs';

const loadSchema = (name) => readFileSync(`${__dirname}/${name}.graphql`).toString('utf-8');

export default [
    loadSchema('schema'),
    loadSchema('inputs')
]
