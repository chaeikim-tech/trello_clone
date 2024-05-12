import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { FaTrashAlt } from "react-icons/fa";
import { useSetRecoilState } from 'recoil';
import { toDoState } from '../atoms';


const Card = styled.div<{ isDragging: boolean }>`
    display: flex;
    justify-content: space-between;
    border-radius: 5px;
    margin-bottom: 5px;
    padding: 10px;
    background-color: ${(props) => props.isDragging ? "#e4f2ff" : props.theme.cardColor};
    box-shadow:${(props) => props.isDragging ? "0px 2px 5px rgba(0, 0, 0, 0.05)" : "none"};
  `;

interface IDragabbleCardProps {
    toDoId: number;
    toDoText: string;
    index: number;
    boardId: string;
}


function DraggableCard({ toDoId, toDoText, index, boardId }: IDragabbleCardProps) {
    const setToDos = useSetRecoilState(toDoState)
    const deleteTodo = () => setToDos((oldTodos) => {
        return {
            ...oldTodos,
            [boardId]: [...oldTodos[boardId].filter((todo) => todo.id !== toDoId)]
        };
    });

    return (
        <Draggable draggableId={toDoId + ""} index={index}>
            {(magic, snapshot) => (
                <Card
                    isDragging={snapshot.isDragging}
                    ref={magic.innerRef}
                    {...magic.dragHandleProps}
                    {...magic.draggableProps}
                >
                    {toDoText}
                    <FaTrashAlt onClick={deleteTodo} style={{ cursor: 'pointer' }} />
                </Card>
            )}

        </Draggable>
    )
}

export default React.memo(DraggableCard);