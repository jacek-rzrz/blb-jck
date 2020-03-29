const HR_HEIGHT = 30;

const Timeline = ({
  start,
  end,
  markers
}) => {
  const xs = [...Array(end - start + 1)].map((_, i) => i + start).map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, t));
  return /*#__PURE__*/React.createElement("div", null, xs);
};

const Calendar = () => {
  return /*#__PURE__*/React.createElement(Timeline, {
    start: 10,
    end: 24,
    markers: [10, 18]
  });
};

window.addEventListener('DOMContentLoaded', () => {
  // @ts-ignore
  ReactDOM.render( /*#__PURE__*/React.createElement(Calendar, null), document.querySelector('#calendar-container'));
});

