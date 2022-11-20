import { Child } from './Child';

const Parent = () => {
    return <Child color="red" onClick={() => console.log('clicado')} />
};

export default Parent;