type Props = {
  title: string;
};

const Topic = ({ title }: Props) => {
  return (
    <div className="mb-10 relative text-center">
      <h2 className="text-3xl font-bold uppercase relative z-10 pt-10 inline-block">
        {title}
      </h2>

      {/* Gradient line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-60 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-60 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </div>
  );
};

export default Topic;
