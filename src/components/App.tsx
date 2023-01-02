import './App.css'

export const App = () => {
  const handle = async () => {
    // @ts-ignore
    document.getElementById('filePath').innerText = await window.bs.loadDirectory('this-is-my-path')
  }

  return (
    <main>
      <button type='button' id='btn' onClick={handle}>
        Open a File
      </button>
      File path: <strong id='filePath'></strong>
    </main>
  )
}
