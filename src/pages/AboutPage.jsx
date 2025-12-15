import { Link } from "../Link";

export default function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hola este es un clon de React Routerr con fines pedagogicos </p>
      <Link
        to ={'/'}
      >
        Ir a home
      </Link>
    </>
  );
}
