import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DraggableCard from "./DraggableCard";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px 10px;
  padding-top: 10px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 300px;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;

interface IAreaProps {
  isDraggingFromThis: boolean;
  isDraggingOver: boolean;
}

const Area = styled.div<IAreaProps>`
  background-color: ${(props) =>
    props.isDraggingOver ? "#789395" : props.isDraggingFromThis ? "#D3E4CD" : "#ADC2A9"};
  flex-grow: 1;
  transition: background-color 0.3s ease-in-out;
`;

interface IBoardProps {
  toDos: string[];
  boardId: string;
}

function Board({ toDos, boardId }: IBoardProps) {
  return (
    <Wrapper>
        <Title>{boardId}</Title>
        <Droppable droppableId={boardId}>
          {(magic, info) => (
            <Area isDraggingOver={info.isDraggingOver} isDraggingFromThis={Boolean(info.draggingFromThisWith)} ref={magic.innerRef} {...magic.droppableProps}>
              {toDos.map((toDo, index) => (
                <DraggableCard key={toDo} index={index} toDo={toDo} />
              ))}
              {magic.placeholder}
              {/* 'magic.placeholder' Draggable을 드래그할 때 Droppable 리스트가 작아지는 것을 방지 */}
            </Area>
          )}
        {/* Droppable의 children은 함수여야 함. */}
        </Droppable>
    </Wrapper>
  );
}
export default Board;