export function timeout(duration: number): Promise<{}> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

export function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * max + min);
}

// Popup component helper
export function calculatePopupPosition(origin: HTMLElement, target: HTMLElement) {
  const originWidth: number = origin.offsetWidth;
  const originHeight: number = origin.offsetHeight;
  const viewportOffset = origin.getBoundingClientRect();
  const position = {
    left: Math.round(viewportOffset.left),
    top: Math.round(viewportOffset.top),
  };

  const popupWidth: number = target.clientWidth;
  let outputLeft: number | string = position.left + originWidth / 2 - popupWidth / 2;
  let outputTop: number | string = position.top + originHeight;
  let outputBottom: number | string = "auto";
  const windowWidth: number = window.innerWidth;

  if (outputLeft + popupWidth > windowWidth - 15) {
    outputLeft = windowWidth - popupWidth - 15 + "px";
  } else if (outputLeft < 15) {
    outputLeft = 15 + "px";
  }
  if (outputTop + 300 > $(window).height()) {
    outputTop = "auto";
    outputBottom = $(window).height() - position.top + "px";
  } else {
    outputTop = outputTop + "px";
  }

  return {
    left: outputLeft,
    top: outputTop,
    bottom: outputBottom,
    width: originWidth + "px",
  };
}

// Popup component helper
export function calculatePopupRelativePosition(
  origin: HTMLElement,
  target: HTMLElement,
  container?: HTMLElement
) {
  const originWidth: number = origin.offsetWidth;
  const originHeight: number = origin.offsetHeight;
  const viewportOffset = origin.getBoundingClientRect();
  let OriginPosition = {
    left: Math.round(viewportOffset.left),
    top: Math.round(viewportOffset.top),
  };

  const popupWidth: number = target.offsetWidth;
  const popupHeight: number = target.offsetHeight;

  let containerWidth: number;
  let containerHeight: number;
  let containerPosition;

  let outputLeft: any;
  let outputTop: any;

  if (container) {
    containerWidth = container.offsetWidth;
    containerHeight = container.offsetHeight;
    containerPosition = {
      left: Math.round(container.getBoundingClientRect().left),
      top: Math.round(container.getBoundingClientRect().top),
    };
    OriginPosition = {
      left: OriginPosition.left - containerPosition.left,
      top: OriginPosition.top - containerHeight,
    };
  } else {
    containerWidth = window.innerWidth;
    containerHeight = window.innerHeight;
  }

  outputLeft = OriginPosition.left + originWidth / 2 - popupWidth / 2;
  outputTop = OriginPosition.top + originHeight + 15;

  let XType;
  let YType;

  if (outputLeft + popupWidth > containerWidth - 15) {
    XType = "right";
  } else if (outputLeft < 15) {
    XType = "left";
  } else {
    XType = "center";
  }

  if (outputTop + popupHeight + 15 > containerHeight) {
    YType = "top";
  } else {
    YType = "bottom";
  }

  return {
    XType,
    YType,
  };
}
