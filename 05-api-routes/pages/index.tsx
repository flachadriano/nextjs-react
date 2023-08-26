import { useRef } from "react"

export default function Home() {
  const nameRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: any) => {
    event.preventDefault();
    const name = nameRef.current?.value;
    console.log('name', name);
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={onSubmit}>
        <div>
          <span>Name</span>
          <input ref={nameRef} />
        </div>
        <button type="submit">Submitt</button>
      </form>
    </div>
  )
}
