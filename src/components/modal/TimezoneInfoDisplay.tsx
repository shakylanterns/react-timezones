import { useRootStore } from "../../store/rootStore";

function TimezoneInfoDisplay() {
  const { timezoneInfo } = useRootStore();
  return (
    <p className="my-4 py-3 px-6 bg-secondary-600 text-white text-lg font-semibold rounded-md shadow-md">
      The timezone will be:
      <span className="mx-1">{timezoneInfo?.abbreviation_STD}</span>
      <span className="mx-1">{timezoneInfo?.offset_STD}</span>
    </p>
  );
}

export default TimezoneInfoDisplay;
