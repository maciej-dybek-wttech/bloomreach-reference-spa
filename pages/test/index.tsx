export default function Index() {
  return (
    <>
      <p>Static content page</p>
      <p>{process.env.NEXT_PUBLIC_BRXM_ENDPOINT}</p>
    </>
  );
}
