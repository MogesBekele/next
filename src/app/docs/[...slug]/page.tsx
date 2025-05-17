export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  if (slug?.length === 2) {
    return (
      <div>
        <h1>viewing docs for feature slug[0] and concept slug[1]</h1>
      </div>
    );
  }
  
  
}

// catch segment route
