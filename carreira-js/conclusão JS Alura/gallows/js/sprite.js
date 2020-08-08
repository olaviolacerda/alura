const createSprite = classSelected => {
  const $selectedElement = $(classSelected);

  const frames = [
    "frame1",
    "frame2",
    "frame3",
    "frame4",
    "frame5",
    "frame6",
    "frame7",
    "frame8",
    "frame9"
  ];

  let currentFrame = 0;

  const last = frames.length - 1;

  $selectedElement.addClass(frames[currentFrame]);

  const moveFrame = (from, to) =>
    $selectedElement.removeClass(from).addClass(to);

  const hasNext = () => currentFrame + 1 <= last;

  const nextFrame = () => {
    if (hasNext()) moveFrame(frames[currentFrame], frames[++currentFrame]);
  };

  const reset = () => {
    moveFrame(frames[currentFrame], frames[0]);
    currentFrame = 0;
  };

  const isFinished = () => !hasNext();

  return {
    nextFrame,
    isFinished,
    reset
  };
};
