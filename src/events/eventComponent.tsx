const EventComponent: React.FC = () => {
    
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    };

    const onDragStart = () => (
        console.log('Being Dragged')
    );
    
    return(
    <div>
        <input onChange={onChange} />
        <div draggable onDragStart={onDragStart}>Drag me!</div>
    </div>
    );
};

export default EventComponent;