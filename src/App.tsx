import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function App() {
    const onDragEnd = () => {};
    return <DragDropContext onDragEnd={onDragEnd}>
        <div>
            <Droppable droppableId='one'>
                {(magic) => (
                    <ul ref={magic.innerRef} {...magic.droppableProps}>
                    <Draggable draggableId='first' index={0}>
                        {(magic)=> (
                            <li ref={magic.innerRef} {...magic.draggableProps}>
                                <span {...magic.dragHandleProps}>🔥</span>
                                One
                            </li>
                        )}
                    </Draggable>
                    <Draggable draggableId='second' index={1}>
                        {(magic)=> (
                            <li ref={magic.innerRef} {...magic.draggableProps}>
                                <span {...magic.dragHandleProps}>🔥</span>
                                Two
                            </li>
                        )}
                    </Draggable>
                    </ul>
                )}
                {/* Droppable의 children은 함수여야 함. */}
            </Droppable>
        </div>
    </DragDropContext>
}
// onDragEnd = 유저가 드래그를 끝낸 시점에 불려지는 함수.
export default App;