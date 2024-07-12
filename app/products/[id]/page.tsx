export default function Page({ params }: { params: { id: string } }) {
  return <p>Product: {params.id}</p>;
}
