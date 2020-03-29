
interface TimelineProps {
  start: number;
  end: number;
  markers: number[];
}

const HR_HEIGHT = 30;

const Timeline = ({start, end, markers}: TimelineProps) => {

  const xs = [...Array(end - start + 1)].map((_, i) => i + start).map((t, i) => <span key={i}>{t}</span>);

  return (
    <div>
      {xs}
    </div>
  );
};

const Calendar = () => {
    return <Timeline start={10} end={24} markers={[10, 18]}/>;
};

window.addEventListener('DOMContentLoaded', () => {
    // @ts-ignore
  ReactDOM.render(<Calendar />, document.querySelector('#calendar-container'));
});
