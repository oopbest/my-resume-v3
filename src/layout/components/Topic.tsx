type Props = {
  title: string;
};

const Topic = ({ title }: Props) => {
  return (
    <h2 className="text-center text-3xl font-bold py-8 uppercase">{title}</h2>
  );
};

export default Topic;
