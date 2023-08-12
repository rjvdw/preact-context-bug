import { render } from 'preact'
import { useFooContext } from './Foo'
import { useBarContext } from './Bar'
import { useBazContext } from './Baz'

function App() {
  const foo = useFooContext()
  const bar = useBarContext()
  const baz = useBazContext()

  return (
    <main>
      <Rule label="foo" signal={foo} />
      <Rule label="bar" signal={bar} />
      <Rule label="baz" signal={baz} />
    </main>
  )
}

function Rule({ label, signal }) {
  return (
    <>
      <label for={label}>{label}:</label>
      <input id={label} type="text" readonly value={signal.value} />
      <button onClick={() => (signal.value += 1)}>increment</button>
    </>
  )
}

render(<App />, document.body)
