import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div<{ isDragging: boolean }>`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px;
  background-color: ${(props) => props.theme.cardColor};
  box-shadow: ${(props) => props.isDragging ? "0px 2px 5px rgba(0, 0, 0, 0.5)" : "none"};
`;

interface IDragabbleCardProps {
    toDoId: number;
    toDoText: string
    index: number;
}

function DraggableCard({ toDoId, toDoText, index }:IDragabbleCardProps ) {
    return(
        <Draggable draggableId={toDoId + ""} index={index}>
        {/* key에 item의 index가 포함되면 안됨. 일반적으로 draggableId를 key로 사용  */}    
            {(magic, snapshot) => (
                <Card isDragging={snapshot.isDragging} ref={magic.innerRef} {...magic.dragHandleProps} {...magic.draggableProps}>
                    {toDoText}
                </Card>
            )}
        </Draggable>
    );
}

export default React.memo(DraggableCard);

/* React.memo = 컴포넌트의 props가 바뀌지 않았다면, re-rendering을 방지하여 컴포넌트의 리렌더링 성능 최적화 */