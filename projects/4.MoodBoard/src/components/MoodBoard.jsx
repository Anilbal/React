export function MoodBoardItem({ color, image, description }) {
  return (
    <div className="mood-board-item" style={{
        backgroundColor:`${color}`
    }}>
      <img src={image} alt={description} className="mood-board-image" />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
}

export function MoodBoard() {
  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        <MoodBoardItem
          color="red"
          image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
          description="sdjsdcksbdk"
        />
        <MoodBoardItem
          color="blue"
          image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
          description="sdbsk"
        />
        <MoodBoardItem
          color="green"
          image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg"
          description="dsbsd"
        />
      </div>
    </div>
  );
}
