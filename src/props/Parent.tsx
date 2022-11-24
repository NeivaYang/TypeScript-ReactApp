import { Child, ChildAsFC } from './Child';

const Parent = () => {
    return <ChildAsFC color="red" onClick={() => console.log('clicado')} >
    </ChildAsFC>;
};

export default Parent;