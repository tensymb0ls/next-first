interface Props {
  params: any;
}
const page = ({ params }: Props) => {
  return <div className="min-h-screen">id# {params.id}</div>;
};

export default page;
